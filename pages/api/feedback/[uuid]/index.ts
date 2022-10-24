import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { client } from "@/prisma/client";
import { z } from "zod";
import {
  GetOneFeedback,
  HasSessionCreatedFeedback,
  ValidateFeedbackBody,
} from "@/lib/feedback.module";
import { CommentsInnerJonn } from "@/lib/comments.module";

const GET: NextApiHandler<any> = async (req, res) => {
  return res.json(await GetOneFeedback(req));
};

const PUT: NextApiHandler<any> = async (req, res) => {
  const resultGet = await GetOneFeedback(req);
  if ("_errors" in resultGet) {
    return res.json(resultGet);
  }

  if (req.session.user?.role === "USER" && HasSessionCreatedFeedback(resultGet, req, res, "update")) return;
  const parsedBody = ValidateFeedbackBody.partial().safeParse(req.body);
  if (parsedBody.success) {
    const resultUpdate = await client.feedback.update({
      where: {
        id: resultGet.id,
      },
      data: {
        ...parsedBody.data,
        status: req.session?.user?.role === "USER" ? undefined : parsedBody.data?.status
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
        comments: {
          where: {
            parentId: null,
          },
          include: CommentsInnerJonn,
        },
        _count: {
          select: {
            votes: true,
          },
        },
      },
    });

    return res.json(resultUpdate);
  } else {
    return res.status(400).json(parsedBody.error.format());
  }
};

const DELETE: NextApiHandler<any> = async (req, res) => {
  const resultGet = await GetOneFeedback(req);
  if ("_errors" in resultGet) {
    return res.json(resultGet);
  }

  if (HasSessionCreatedFeedback(resultGet, req, res, "delete")) return;
  await client.feedback.delete({
    where: {
      id: req.query.uuid as string,
    },
  });

  return res.json({ ok: true });
};

export default withSessionRoute((req, res) => {
  if (!req.session.user) return res.status(401).json({ unauthorized: true });
  const queryID = z.string().uuid().safeParse(req.query.uuid);
  if (!queryID.success) return res.status(400).json(queryID.error.format());
  if (req.method === "GET") return GET(req, res);
  if (req.method === "PUT") return PUT(req, res);
  if (req.method === "DELETE") return DELETE(req, res);
});
