import React, { Dispatch, useCallback } from "react";
import { VotesButton } from "./VotesStyle";
import { UpArrow } from "@/assets/upArrow"

type VotesProps = {
  votes: number;
  setVotes?: Dispatch<number>;
  active: boolean;
  setActive?: Dispatch<boolean>;
  onClick?: (vote: number) => void
  className?: string
};

const Votes: React.FC<VotesProps> = ({
  votes,
  setVotes,
  active,
  setActive,
  onClick,
  className
}) => {
  const formatedVotes = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(votes);

  const onVoteClick = useCallback(() => {
    if (!active) {
      setVotes && setVotes(votes + 1);
      setActive && setActive(true);
      onClick && onClick(votes + 1)
    } else {
      setVotes && setVotes(votes - 1);
      setActive && setActive(false);
      onClick && onClick(votes - 1)
    }
    
  }, [votes, active, setActive, setVotes, onClick]);

  return <VotesButton active={active} onClick={onVoteClick} className={className}>
    <UpArrow />
    <div>{formatedVotes}</div>
  </VotesButton>
};

export default Votes;
