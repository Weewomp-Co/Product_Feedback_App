import React from 'react'
import Votes from '../votes/Votes'
import {FeedbackPreviewContainer, title, CommentsStyle, subtitle, textWrapper, VotesStyle, tag} from './FeedbackPreviewStyle'
import {useState, useEffect, Dispatch} from 'react'
import { css, styled } from "../../../stitches.config";
import { Comments } from '@/assets/comments';
import Image from 'next/image';
import Link from 'next/link';


type FeedbackPreviewProp = React.PropsWithChildren<{
  votes: number;
  commentsNumber: number;
  Title: string;
  Subtitle: string;
  Category: string;
  setVotes: Dispatch<number>;
  active: boolean;
  setActive: Dispatch<boolean>;
  uuid: string;
}>

const FeedbackPreview: React.FC<FeedbackPreviewProp> = ({
  votes,
  commentsNumber,
  Title,
  Subtitle,
  Category,
  setVotes,
  active,
  setActive,
  uuid
}) => {
  const [hovering, setHovering] = useState(false)

  return (
    <FeedbackPreviewContainer onMouseEnter={() => {
      setHovering(true);
    }} onMouseLeave={() => {
      setHovering(false)
    }}>
        <Votes votes={votes} setVotes={setVotes} active={active} setActive={setActive} className={VotesStyle()}/>
        <div className={textWrapper()}>     
          <Link href={`/feedback/${uuid}`}><a className={title()}>Add tags for solutions</a></Link>
          <p className={subtitle()}>Easier to search for solutions based on a specific stack.</p>
          <p className={tag()}>
          {Category}
          </p>
        </div>
       
        <p className={CommentsStyle()}>
          <Comments /> {commentsNumber}
        </p>
    </FeedbackPreviewContainer>
  )
}

export default FeedbackPreview