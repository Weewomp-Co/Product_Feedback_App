import { client } from "@/prisma/client"
import { Category, Feedback, Prisma, Status } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { CommentsInnerJonn } from "./comments.module";

export const GetOneFeedback = async (req: NextApiRequest) => {
  const result = await client.feedback.findFirst({
    where: {
      id: req.query.uuid as string,
    },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          username: true
        }
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
          comments: true
        },
      }
    }
  });

  if (!result) {
    return { 
      _errors: [`Feedback not found by id of ${req.query.uuid}`] 
    }
  }

  return result;
}

export const HasSessionCreatedFeedback = (feedback: Feedback, req: NextApiRequest, res: NextApiResponse<unknown>, keyword: string) => {
  if (req.session?.user?.role === "ADMIN") return false
  if (feedback.userId !== req.session.user?.id) {
    res.status(401).json({
      _errors: [`Unauthorized cannot ${keyword} another users feedback post`]
    })

    return true
  }

  return false
}

export const ValidateFeedbackBody = z.object({
  title: z.string().min(5).max(25),
  details: z.string().min(25).max(256),
  status: z.enum([Status.Live, Status.Planned, Status.Progress, Status.Suggestion] as const).optional(),
  category: z.enum([Category.UI, Category.UX, Category.Bug, Category.Feature, Category.Enchancement] as const),
})

export const feedbackPostQuery = Prisma.validator<Prisma.FeedbackArgs>()({
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
              replyTo: {
                select: {
                  id: true,
                  username: true,
                  email: true
                }
              }
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
          comments: true
        },
      },
    }
})

export type GetFeedbackPost = Prisma.FeedbackGetPayload<typeof feedbackPostQuery>
