import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { z } from "zod";
import { client } from "@/prisma/client"
import { hash } from "argon2";
import { updateUserSession } from "@/lib/user.module";

const DELETE: NextApiHandler = async (req, res) => {
  const getUser = await client.user.findFirst({
    where: { id: req.query.uuid as string }
  })

  if (!getUser) return res.status(400).json({
    _errors: [`No user found by the id of ${req.query.uuid}`],
  })

  if (req.session.user?.role === "USER" && getUser.id !== req.session.user?.id) return res.status(401).json({
    unauthorized: true
  })

  const { count } = await client.user.deleteMany({
    where: {
      id: req.query.uuid as string
    }
  })

  if (getUser.id === req.session.user?.id) {
    req.session.destroy()
  }

  return res.json({ deleted: count })
}

const PUTValidator = z.object({
  username: z.string().trim().min(1).max(8),
  password: z.optional(z.string().trim().min(8)),
  confirm: z.string().optional(),
}).refine((input) => input.password === input.confirm, {
  message: "Passwords don't match",
  path: ["confirm"], // path of error
})


export const PUT: NextApiHandler = async (req, res) => {
  const getUser = await client.user.findFirst({
    where: {
      id: req.query.uuid as string
    }
  })

  if (!getUser) return res.status(400).json({
    _errors: [`No user found by the id of ${req.query.uuid}`],
  })

  if (req.session.user?.role === "USER" && getUser.id !== req.session.user?.id) return res.status(401).json({
    unauthorized: true
  })

  const parseBody = PUTValidator.safeParse(req.body)
  if (parseBody.success) {
    if (getUser.username !== parseBody.data.username) {
      const doesUsernameExist = await client.user.count({
        where: {
          username: parseBody.data.username
        }
      })

      if (doesUsernameExist) return res.status(400).json({
        _errors: [],
        username: {
          _errors: ['User by the username already exists']
        }
      })
    }

    const newPassword = parseBody.data?.password ? await hash(parseBody.data.password) : getUser.password
    await client.user.update({
      where: {
        id: req.query.uuid as string
      },
      data: {
        username: parseBody.data.username,
        password: newPassword
      }
    })

    await updateUserSession(req)
    return res.json({ updated: true })
  } else {
    const errorMessage = parseBody.error.format()
    return res.status(400).json(errorMessage)
  }
}

export default withSessionRoute((req, res) => {
  if (!req.session?.user?.id) return res.status(401).json({ unauthorized: true })
  const queryID = z.string().uuid().safeParse(req.query.uuid);
  if (!queryID.success) return res.status(400).json(queryID.error.format());

  if (req.method === "DELETE") return DELETE(req, res)
  if (req.method === "PUT") return PUT(req, res)
})
