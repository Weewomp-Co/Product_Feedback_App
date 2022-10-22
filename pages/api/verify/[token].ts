import { box } from "@/lib/soya.module";
import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { client } from "@/prisma/client"
import { updateUserSession } from "@/lib/user.module";

const GET: NextApiHandler = async (req, res) => {
  if (typeof req.query.token != "string") return res.json({ bad: true })

  const buffer = Buffer.from(decodeURIComponent(req.query.token), 'base64')
  const message = await box.decrypt(buffer)
  const id = message.toString()

  await client.user.update({
    where: {
      id: id,
    },
    data: {
      active: true
    }
  });

  await updateUserSession(req)
  return res.redirect(301, '/feedback')
}

export default withSessionRoute((req, res) => {
  if (req.method === "GET") return GET(req, res)
})
