import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { z } from "zod";
import { client } from "@/prisma/client"

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

  if (getUser.id !== req.session.user?.id) {
    req.session.destroy()
  }

  return res.json({ deleted: count })
}

export default withSessionRoute((req, res) => {
  if (!req.session?.user?.id) return res.status(401).json({ unauthorized: true })
  const queryID = z.string().uuid().safeParse(req.query.uuid);
  if (!queryID.success) return res.status(400).json(queryID.error.format());

  if (req.method === "DELETE") return DELETE(req, res)
})
