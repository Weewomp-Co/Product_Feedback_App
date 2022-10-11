import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { client } from "@/prisma/client"
import { z } from "zod";

const ValidatePostInput = z.object({
  content: z.string().min(25),
  parentId: z.string().optional(),
  replyToId: z.string().optional()
}).refine(async (data) => {
  if (data.parentId === undefined || data.parentId === null) return true
  const doesParentCommentExist = await client.comment.count({
    where: {
      id: data.parentId
    }
  })

  return !!doesParentCommentExist
}, {
  message: "Parent comment does not exist"
}).refine(async (data) => {
  if (data.replyToId === undefined || data.replyToId === null) return true 
  if (data.parentId === undefined || data.parentId === null) return false

  const doesReplyCommentToParent = await client.comment.count({
    where: {
      id: data.parentId,
      children: {
        some: {
          userId: data.replyToId
        }
      }
    }
  })

  return !!doesReplyCommentToParent
}, {
  message: "replied user has not commented on parent comment"
})

const POST: NextApiHandler<any> = async (req, res) => {
  const parsedBody = await ValidatePostInput.safeParseAsync(req.body)

  if (parsedBody.success) {
    const comment = await client.comment.create({
      data: {
        ...parsedBody.data,
        userId: req.session.user?.id as string,
        postId: req.query?.uuid as string
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            username: true
          }
        }
      }
    })

    return res.json(comment) 
  } else {
    return res.status(400).json(parsedBody.error.format())
  }
}

export default withSessionRoute((req, res) => {
  if (!req.session.user?.id) return res.status(401).json({ unauthorized: true })
  const queryID = z.string().uuid().safeParse(req.query.uuid);
  if (!queryID.success) return res.status(400).json(queryID.error.format());
  if (req.method === "POST") return POST(req, res)
})
