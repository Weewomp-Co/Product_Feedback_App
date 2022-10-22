import { GetFeedbackPost } from "@/lib/feedback.module";
import { userAtom } from "@/lib/stores";
import { ColumnContainer, LabelStyle } from "@/styles/roadmap"
import { Status } from "@prisma/client";
import { useAtom } from "jotai";
import RoadmapPageCard from "../roadmap-page-card";
import { Header, SubHeader } from "./styles";

type RemoveSuggestion<T> = T extends "Suggestion" ? never : T 
type RoadmapStatusContainerProps = {
  posts: GetFeedbackPost[];
  status: RemoveSuggestion<Status>
};

const StatusToDescripton: Record<RemoveSuggestion<Status>, string> = {
  'Planned': 'Ideas prioritized for research',
  'Progress': 'Currently being developed',
  'Live': 'Released features'
}

export const RoadmapStatusContainer: React.FC<RoadmapStatusContainerProps> = ({ posts, status }) => {
  const [user] = useAtom(userAtom);
  const filterPostByStatus = posts.filter((item) => item.status === status)

  return (
    <div className={ColumnContainer()}>
      <div className={LabelStyle()}>
        <h3 className={Header()}>
          {status} ({filterPostByStatus.length})
        </h3>
        <p className={SubHeader()}>
          {StatusToDescripton[status]}
        </p>
      </div>
      {filterPostByStatus
        .map((item) => (
          <RoadmapPageCard
            votes={item._count.votes}
            title={item.title}
            status={item.status}
            desc={item.details}
            category={item.category}
            commentsNumber={item._count.comments}
            key={item.id}
            uuid={item.id}
            active={user.votes.some(({ feedbackId }) => item.id === feedbackId)}
          />
        ))}
    </div>
  );
};
