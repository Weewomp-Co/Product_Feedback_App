import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { client } from "@/prisma/client"
import { z } from "zod";
import { updateUserSession } from "@/lib/user.module";

const POST: NextApiHandler<any> = async (req, res) => {
  const postExist = await client.feedback.findFirst({
    where: {
      id: req.query.uuid as string
    }
  })
  
  if (postExist) {
    const getVote = await client.vote.findFirst({
      where: {
        feedbackId: req.query.uuid as string,
        userId: req.session.user?.id
      }
    })

    if (!getVote) {
      // create vote
      await client.vote.create({
        data: {
          userId: req.session.user?.id as string,
          feedbackId: req.query.uuid as string,
        }
      })

      await updateUserSession(req)
      return res.json({ created: true })
    } else {
      // remove vote
      await client.vote.delete({
        where: {
          id: getVote.id
        }
      })

      await updateUserSession(req)
      return res.json({ deleted: true })
    }
  } else {
    return res.json({
      _errors: [`Feedback post does not exist by id of ${req.query.uuid}`]
    })
  }
};

export default withSessionRoute((req, res) => {
  if (!req.session.user) return res.status(401).json({ unauthorized: false });
  const queryID = z.string().uuid().safeParse(req.query.uuid);
  if (!queryID.success) return res.status(400).json(queryID.error.format());
  if (req.method === "POST") return POST(req, res);
});
