import { Feedback, Comment } from "@prisma/client";
import FeedbackPreview from "../preview";
import { ShowPostsContainer } from "./styles";

type AllFeedbackPosts = (Feedback & {
  user: {
    id: string;
    email: string;
    username: string;
  };
  comments: (Comment & {
    children: (Comment & {
      user: {
        id: string;
        email: string;
        username: string;
      };
    })[];
    user: {
      id: string;
      email: string;
      username: string;
    };
  })[];
  _count: {
    votes: number;
  };
})[];

type ShowPostProps = {
  posts: AllFeedbackPosts;
};

export const ShowPosts: React.FC<ShowPostProps> = ({ posts }) => {
  console.log(posts);
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
