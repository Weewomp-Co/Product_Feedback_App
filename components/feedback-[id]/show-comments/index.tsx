import { GetFeedbackPost } from "@/lib/feedback.module"
import { Comment } from "./comment"
import { ShowCommentsContainer } from "./styles"

type ShowCommentsProp = {
  post: GetFeedbackPost
}
export const ShowComments: React.FC<ShowCommentsProp> = ({ post }) => {
  return <ShowCommentsContainer>
    <h2>{post._count.comments} Comments</h2>
    {post.comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </ShowCommentsContainer>
}
