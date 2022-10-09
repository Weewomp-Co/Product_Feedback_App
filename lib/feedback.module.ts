import { client } from "@/prisma/client"
import { Category, Feedback, Status } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

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
      _count: {
        select: {
          votes: true
        }
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

