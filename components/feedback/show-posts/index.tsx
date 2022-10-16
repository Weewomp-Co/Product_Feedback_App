import { GetFeedbackPost } from "@/lib/feedback.module";
import FeedbackPreview from "../preview";
import { ShowPostsContainer } from "./styles";

type ShowPostProps = {
  posts: GetFeedbackPost[]
};

export const ShowPosts: React.FC<ShowPostProps> = ({ posts }) => {
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
          active={false}
          commentsNumber={post.comments.length}
        />
      ))}
    </ShowPostsContainer>
  );
};
