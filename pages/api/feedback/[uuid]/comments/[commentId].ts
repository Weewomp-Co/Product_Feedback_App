import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { z } from "zod";
import { client } from "@/prisma/client";
import { CommentsInnerJonn, ValidationCommentPutInput } from "@/lib/comments.module";

const DELETE: NextApiHandler<any> = async (req, res) => {
  const { count } = await client.comment.deleteMany({
    where: {
      id: req.query?.commentId as string,
    },
  });

  if (count === 0)
    return res.status(400).json({
      _errors: ["Comment ID does not exist"],
    });

  return res.json({
    ok: true,
  });
};

const PUT: NextApiHandler = async (req, res) => {
  const parsedBody = ValidationCommentPutInput.safeParse(req.body);

  if (parsedBody.success) {
    const comment = await client.comment.update({
      where: {
        id: req.query.commentId as string,
      },
      data: parsedBody.data,
      include: CommentsInnerJonn,
    });

    return res.json(comment);
  } else {
    return res.status(400).json(parsedBody.error.format());
  }
};

export default withSessionRoute(async (req, res) => {
  if (!req.session.user?.id)
    return res.status(401).json({ unauthorized: true });
  const queryID = z.string().uuid().safeParse(req.query.uuid);
  if (!queryID.success) return res.status(400).json(queryID.error.format());
  const queryCommentID = z.string().uuid().safeParse(req.query.commentId);
  if (!queryCommentID.success)
    return res.status(400).json(queryCommentID.error.format());

  const getComment = await client.comment.findFirst({
    where: {
      id: req.query.commentId as string,
    }
  })

  if (!getComment) return res.status(400).json({
    _errors: ["No Comment By that ID"]
  })

  if (getComment.userId !== req.session.user?.id) return res.status(401).json({
    unauthorized: true
  })

  if (req.method === "DELETE") return DELETE(req, res);
  if (req.method === "PUT") return PUT(req, res);
});
