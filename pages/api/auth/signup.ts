import { createUser, handlePrismaUserError, santizeUser } from "@/lib/user.module";
import { withSessionRoute } from "@/lib/withSession.module";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextApiHandler } from "next";
import { z } from "zod"

const ValidatePostInput = z.object({
  username: z.string().max(8),
  email: z.string().email(),
  password: z.string().min(8),
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
      req.session.user = santizeUser(user)
      await req.session.save()

      return res.json(req.session.user)
    } catch(err) {
      if (err instanceof PrismaClientKnownRequestError) {
        return res.json(handlePrismaUserError(err))
      }
    }
  } else {
    res.json(valBody.error.format())
  }
}

export default withSessionRoute((req, res) => {
  if (req.method === "POST") {
    POST(req, res)
  }
})
