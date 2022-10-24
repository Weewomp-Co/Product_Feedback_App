import { emailClient } from "@/lib/postmark.module";
import { box } from "@/lib/soya.module";
import { VERIFICATION_DURATION, withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { client } from "@/prisma/client"

const POST: NextApiHandler = async (req, res) => {
  const host = process.env.NEXT_PUBLIC_HOSTNAME ?? 'http://localhost:3000' 
  const token = await box.encrypt(
    JSON.stringify({ 
      message: req.session.verify?.message as string, 
      expires: Date.now() + VERIFICATION_DURATION 
    })
  )

  const user = await client.user.findFirst({
    where: {
      id: req.session.verify?.message,
    }
  })

  if (!user) return res.status(400).json({
    _errors: ["User no longer exists"]
  })

  if (user.active) return res.status(400).json({
    _errors: ["Session User is already active"]
  })

  emailClient.sendEmail({
    "From": "reach@yofou.dev",
    "To": user.email,
    "Subject": "Frontend Mentor Feedback app",
    "TextBody": `click here to verify email. ${host}/api/verify/${encodeURIComponent(token.toString('base64'))}`
  });

  return res.json({
    success: true
  })
}

export default withSessionRoute((req, res) => {
  if (!req.session.verify?.message) return res.status(400).json({ 
    _errors: ["Could not grab previous session attempt to refresh"] 
  })

  if (req.session?.verify?.expires < VERIFICATION_DURATION) {
    return res.status(400).json({
      _errors: ["Previous verification session still active"]
    })
  }

  if (req.method === "POST") return POST(req, res)
})
