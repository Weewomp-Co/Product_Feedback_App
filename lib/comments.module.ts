import { z } from "zod"
import { client } from "@/prisma/client"

export const ValidateCommentPostInput = z.object({
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

export const ValidaitonCommentPutInput = z.object({
  id: z.never(),
  content: z.string().min(25),
  parentId: z.never(),
  replyToId: z.never(),
  createdAt: z.never(),
  userId: z.never(),
}).partial()

export const doesPostExist = async (postId?: string) => {
  if (!postId) return false
  return !!(await client.feedback.count({
    where: {
      id: postId
    }
  }))
}
