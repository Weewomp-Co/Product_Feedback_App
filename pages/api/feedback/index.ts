import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { Status } from "@prisma/client";
import { client } from "@/prisma/client";
import { ValidateFeedbackBody } from "@/lib/feedback.module";

const POST: NextApiHandler<any> = async (req, res) => {
  const parsedBody = ValidateFeedbackBody.safeParse(req.body);
  if (parsedBody.success) {
    const result = await client.feedback.create({
      data: {
        title: parsedBody.data.title,
        details: parsedBody.data.details,
        status: parsedBody.data.status ?? Status.Suggestion,
        category: parsedBody.data.category,
        userId: req.session.user?.id as string,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
        _count: {
          select: {
            votes: true,
          },
        },
      },
    });

    return res.status(201).json(result);
  } else {
    return res.status(400).json(parsedBody.error.format());
  }
};

const GET: NextApiHandler<any> = async (req, res) => {
  const results = await client.feedback.findMany({
    include: {
      user: {
        select: {
          username: true,
          email: true,
          id: true,
        },
      },
      comments: {
        where: {
          parentId: null,
        },
        include: {
          children: {
            include: {
              user: {
                select: {
                  id: true,
                  username: true,
                  email: true,
                },
              },
            },
          },
          user: {
            select: {
              id: true,
              username: true,
              email: true,
            },
          },
        },
      },
      _count: {
        select: {
          votes: true,
        },
      },
    },
  });

  return res.json(results);
};

export default withSessionRoute((req, res) => {
  if (!req.session.user) return res.status(401).json({ unauthorized: false });
  if (req.method === "POST") return POST(req, res);
  if (req.method === "GET") return GET(req, res);
});
