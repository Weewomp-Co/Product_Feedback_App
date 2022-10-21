import React, { useCallback, useState } from "react";
import { VotesButton } from "./VotesStyle";
import { UpArrow } from "@/assets/upArrow"
import {CSS} from '@stitches/react'
import {config, css} from 'stitches.config'

type VotesProps = {
  votes: number;
  active: boolean;
  onClick?: (vote: number) => void
  className?: string
  css?: CSS<typeof config>
};

const Votes: React.FC<VotesProps> = ({
  votes,
  active,
  onClick,
  className,
  css
}) => {
  const [_active, setActive] = useState(active)
  const formatedVotes = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(active != _active ? (active === true && _active === false ? votes-1 : votes + 1) : votes);

  const onVoteClick = useCallback(() => {
    if (!_active) {
      setActive && setActive(true);
      onClick && onClick(votes + 1)
    } else {
      setActive && setActive(false);
      onClick && onClick(votes - 1)
    }
    
  }, [votes, _active, setActive, onClick]);

  return <VotesButton active={_active} onClick={onVoteClick} className={className} css={css}>
    <UpArrow />
    <div>{formatedVotes}</div>
  </VotesButton>
};

export default Votes;
