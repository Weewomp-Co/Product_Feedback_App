import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { z } from "zod"
import { client } from "@/prisma/client"
import { verify } from "argon2"
import { sanitizeUser } from "@/lib/user.module";

const ValidatePostInput = z.object({
  email: z.string().email(),
  password: z.string(),
}).transform(async (input, ctx) => {
  const user = await client.user.findFirst({
    where: {
      email: input.email,
      active: true,
    },
    include: {
      votes: {
        select: {
          feedbackId: true
        }
      }
    }
  })

  const INVALID_USER_ERROR = "Invalid email or password."
  if (user === null) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: INVALID_USER_ERROR
    })

    return z.NEVER
  } 

  if (!await verify(user.password, input.password)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: INVALID_USER_ERROR
    })

    return z.NEVER
  }

  return user
})

const POST: NextApiHandler<any> = async (req, res) => {
  const user = await ValidatePostInput.safeParseAsync(req.body)

  if (user.success) {
    req.session.user = sanitizeUser(user.data)
    await req.session.save()

    return res.json(req.session.user)
  } else {
    return res.status(400).json(user.error.format())
  }
}

export default withSessionRoute((req, res) => {
  if (req.method === "POST") {
    return POST(req, res)
  }
})
