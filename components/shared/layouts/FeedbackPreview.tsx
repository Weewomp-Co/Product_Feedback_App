import React from 'react'
import Votes from '../votes/Votes'
import {FeedbackPreviewContainer} from './FeedbackPreviewStyle'
import {useState, useEffect, Dispatch} from 'react'
import { css, styled } from "../../../stitches.config";
import { Comments } from '@/assets/comments';
import Image from 'next/image';
import Link from 'next/link';

const title = css({
  fontWeight: 'bold',
  color: '$grey600',
  fontSize: '$h3',
  '&::after': {
    position: 'absolute',
    inset: '0',
    content: '',
    display: 'block'
  },
  '&:hover': {
    color: '$grey900'
  }
})

const titleHover = css({
  fontWeight: 'bold',
  color: '$grey900',
  fontSize: '$h3',
})

const CommentsStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginTop: 'auto',
  marginBottom: 'auto',
  gap: '1rem',
  fontWeight: 'bold'
})

const subtitle = css({
  fontSize: '$body1',
  color: '$grey300'
})

const textWrapper = css({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  flexDirection: 'column',
  paddingLeft: '2.5rem',
  gap: '0.75rem'
})

const textWrapperHover = css({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  flexDirection: 'column',
  paddingLeft: '2.5rem',
  gap: '0.75rem',
  color: '$grey900'
})

const VotesStyle = css({  
  zIndex: '1'
})

const tag = css({
  color: '$grey900',
  fontSize: '$body3',
  backgroundColor: '$white600',
  padding: '0.375rem 1rem',
  borderRadius: '0.625rem',
  fontWeight: '$semibold'
})

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
  // const [votes, setVotes] = useState(30);
  // const [active, setActive] = useState(false)

  const [hovering, setHovering] = useState(false)

  return (
    <FeedbackPreviewContainer onMouseEnter={() => {
      setHovering(true);
      console.log('entered')
    }} onMouseLeave={() => {
      setHovering(false)
    }}>
        <Votes votes={votes} setVotes={setVotes} active={active} setActive={setActive} className={VotesStyle()}/>
        <div className={textWrapper()}>     
          <Link href={`/feedback/${uuid}`}><a className={title()}>Add tags for solutions</a></Link>
          <div className={subtitle()}>Easier to search for solutions based on a specific stack.</div>
          <div className={tag()}>
          {Category}
          </div>
        </div>
       
        <div className={CommentsStyle()}>
          <Comments /> {commentsNumber}
        </div>
    </FeedbackPreviewContainer>
  )
}

export default FeedbackPreview