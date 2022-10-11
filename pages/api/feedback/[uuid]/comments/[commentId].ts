import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { z } from "zod";
import { client } from "@/prisma/client"

const DELETE: NextApiHandler<any> = async (req, res) => {
  const { count } = await client.comment.deleteMany({
    where: {
      id: req.query?.commentId as string
    }
  })

  if (count === 0) return res.status(400).json({
    _errors: ["Comment ID does not exist"]
  })

  return res.json({
    ok: true
  })
}

export default withSessionRoute((req, res) => {
  if (!req.session.user?.id)
    return res.status(401).json({ unauthorized: true });
  const queryID = z.string().uuid().safeParse(req.query.uuid);
  if (!queryID.success) return res.status(400).json(queryID.error.format());
  const queryCommentID = z.string().uuid().safeParse(req.query.commentId);
  if (!queryCommentID.success) return res.status(400).json(queryCommentID.error.format());
  if (req.method === "DELETE") return DELETE(req, res);
});
