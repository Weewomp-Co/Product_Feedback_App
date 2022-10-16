import { GetFeedbackPost } from "@/lib/feedback.module";
import FeedbackPreview from "../preview";
import { ShowPostsContainer } from "./styles";
import { userAtom } from "@/lib/stores";
import { useAtom } from "jotai";
type ShowPostProps = {
  posts: GetFeedbackPost[]
};

export const ShowPosts: React.FC<ShowPostProps> = ({ posts }) => {
  const [user] = useAtom(userAtom)
  console.log(user)
  return (
    <ShowPostsContainer>
      {posts.map((post) => (
        <FeedbackPreview
          key={post.id}
          uuid={post.id}
          Title={post.title}
          Subtitle={post.details}
          Category={post.category}
          votes={post._count.votes}
          active={user.votes.some(({ feedbackId }) => post.id === feedbackId)}
          commentsNumber={post.comments.length}
        />
      ))}
    </ShowPostsContainer>
  );
};
