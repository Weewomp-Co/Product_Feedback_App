import React, { useCallback, useState } from "react";
import { VotesButton } from "./VotesStyle";
import { UpArrow } from "@/assets/upArrow"

type VotesProps = {
  votes: number;
  active: boolean;
  onClick?: (vote: number) => void
  className?: string
};

const Votes: React.FC<VotesProps> = ({
  votes,
  active,
  onClick,
  className
}) => {
  const [_active, setActive] = useState(active)
  const formatedVotes = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(votes);

  const onVoteClick = useCallback(() => {
    if (!_active) {
      setActive && setActive(true);
      onClick && onClick(votes + 1)
    } else {
      setActive && setActive(false);
      onClick && onClick(votes - 1)
    }
    
  }, [votes, _active, setActive, onClick]);

  return <VotesButton active={_active} onClick={onVoteClick} className={className}>
    <UpArrow />
    <div>{formatedVotes}</div>
  </VotesButton>
};

export default Votes;
