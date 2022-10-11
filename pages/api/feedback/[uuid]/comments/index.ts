import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { client } from "@/prisma/client";
import { z } from "zod";
import { CommentsInnerJonn, doesPostExist, ValidateCommentPostInput } from "@/lib/comments.module";

const POST: NextApiHandler<any> = async (req, res) => {
  const parsedBody = await ValidateCommentPostInput.safeParseAsync(req.body);

  const isPostIdReal = await doesPostExist(req.query.uuid as string);
  if (!isPostIdReal)
    return res.status(400).json({
      _errors: ["Feedback post does not exist"],
    });

  if (parsedBody.success) {
    const comment = await client.comment.create({
      data: {
        ...parsedBody.data,
        userId: req.session.user?.id as string,
        postId: req.query?.uuid as string,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
      },
    });

    return res.json(comment);
  } else {
    return res.status(400).json(parsedBody.error.format());
  }
};

const GET: NextApiHandler = async (req, res) => {
  const comments = await client.comment.findFirst({
    where: {
      postId: req.query.uuid as string,
    },
    include: CommentsInnerJonn,
  });

  if (!comments) return res.status(400).json({
    _errors: ["Post does not exist"]
  })

  return res.json(comments)
};


export default withSessionRoute((req, res) => {
  if (!req.session.user?.id)
    return res.status(401).json({ unauthorized: true });
  const queryID = z.string().uuid().safeParse(req.query.uuid);
  if (!queryID.success) return res.status(400).json(queryID.error.format());
  if (req.method === "POST") return POST(req, res);
  if (req.method === "GET") return GET(req, res);
});
