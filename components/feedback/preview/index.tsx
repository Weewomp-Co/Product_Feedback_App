import React from "react";
import Votes from "@/components/shared/votes/Votes";
import {
  FeedbackPreviewContainer,
  title,
  CommentsStyle,
  subtitle,
  textWrapper,
  VotesStyle,
  tag,
} from "./styles";
import { Dispatch } from "react";
import { Comments } from "@/assets/comments";
import Link from "next/link";

type FeedbackPreviewProp = React.PropsWithChildren<{
  votes: number;
  commentsNumber: number;
  Title: string;
  Subtitle: string;
  Category: string;
  setVotes?: Dispatch<number>;
  active: boolean;
  setActive?: Dispatch<boolean>;
  uuid: string;
}>;

const FeedbackPreview: React.FC<FeedbackPreviewProp> = ({
  votes,
  commentsNumber,
  Category,
  setVotes,
  active,
  setActive,
  uuid,
  Title,
  Subtitle
}) => {
  return (
    <FeedbackPreviewContainer>
      <Votes
        votes={votes}
        setVotes={setVotes}
        active={active}
        setActive={setActive}
        className={VotesStyle()}
      />

      <div className={textWrapper()}>
        <Link href={`/feedback/${uuid}`}>
          <a className={title()}>{Title}</a>
        </Link>
        <p className={subtitle()}>
          {Subtitle}
        </p>
        <p className={tag()}>{Category}</p>
      </div>

      <p className={CommentsStyle()}>
        <Comments /> {commentsNumber}
      </p>
    </FeedbackPreviewContainer>
  );
};

export default FeedbackPreview;
