import { createUser, handlePrismaUserError, sanitizeUser } from "@/lib/user.module";
import { withSessionRoute } from "@/lib/withSession.module";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextApiHandler } from "next";
import { z } from "zod"
import { emailClient } from "@/lib/postmark.module"
import { box } from "@/lib/soya.module";

const ValidatePostInput = z.object({
  username: z.string().trim().min(1).max(8),
  email: z.string().email(),
  password: z.string().trim().min(8),
  confirm_password: z.string(),
}).refine((input) => input.password === input.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"], // path of error
})

const POST: NextApiHandler<any> = async (req, res) => {
  const valBody = ValidatePostInput.safeParse(req.body)

  if (valBody.success) {
    try {
      const user = await createUser(valBody.data)
      const host = process.env.NEXT_PUBLIC_HOSTNAME ?? 'http://localhost:3000' 
      const token = await box.encrypt(
        JSON.stringify({ 
          message: user.id, 
          expires: Date.now() + 600000 
        })
      )

      emailClient.sendEmail({
        "From": "reach@yofou.dev",
        "To": user.email,
        "Subject": "Frontend Mentor Feedback app",
        "TextBody": `click here to verify email. ${host}/api/verify/${encodeURIComponent(token.toString('base64'))}`
      });

      return res.json(sanitizeUser(user))
    } catch(err) {
      if (err instanceof PrismaClientKnownRequestError) {
        return res.status(400).json(handlePrismaUserError(err))
      }
    }
  } else {
    res.status(400).json(valBody.error.format())
  }
}

export default withSessionRoute((req, res) => {
  if (req.method === "POST") {
    POST(req, res)
  }
})
