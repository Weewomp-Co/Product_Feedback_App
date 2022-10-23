import { box } from "@/lib/soya.module";
import { VERIFICATION_DURATION, withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { client } from "@/prisma/client"
import { updateUserSession } from "@/lib/user.module";
import { IronSessionData } from "iron-session";

const GET: NextApiHandler = async (req, res) => {
  if (typeof req.query.token != "string") return res.json({ bad: true })

  const buffer = Buffer.from(decodeURIComponent(req.query.token), 'base64')
  const message = await box.decrypt(buffer).catch(() => undefined)

  if (!message) return res.redirect('/verify/failed')
  const key = JSON.parse(message.toString()) as NonNullable<IronSessionData["verify"]>

  const duration = Date.now() - key.expires
  // 600000 = 10 minutes
  if (duration >= VERIFICATION_DURATION) {
    req.session.verify = key
    await req.session.save()
    return res.redirect('/verify/expired')
  }

  const { count } = await client.user.updateMany({
    where: {
      id: key.message,
    },
    data: {
      active: true
    }
  });

  if (count === 0) {
    return res.redirect('/verify/failed')
  }

  req.session.verify = undefined
  await updateUserSession(req)
  return res.redirect('/feedback')
}

export default withSessionRoute((req, res) => {
  if (req.method === "GET") return GET(req, res)
})
