import { styled, css } from "stitches.config";
import React from "react";
import {Dot} from './styles'
import Votes from '@/components/shared/votes/Votes'
import {Comments} from '@/assets/comments'
import Link from 'next/link'

type RoadmapPageCardProps = {
  status?: string;
  title?: string;
  desc?: string;
  category?: string;
  votes?: number;
  commentsNumber?: number;
  uuid?: string
}

function getDotByType(status: string | undefined){
  switch(status){
    case 'Planned':
    return "#F49F85"
      break;
    case 'Progress':
    return "#AD1FEA"
      break;
    case 'Live':
    return "#62BCFA"
      break;
  }

  return 'transparent'
}

const RoadmapPageCardContainer = styled('div', {
  minHeight: '17rem',
  height: 'min-content',
  maxWidth: '21.875rem',
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  borderRadius: '.3rem',
  padding: '2rem',
  flexDirection: 'column',
  fontFamily: 'jost',
  gap: '1rem',
  position: 'relative'
})

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1rem'
})

const Type = css({
  color: '$grey300',
})

const Title = css({
  fontFamily: 'jost',
  fontSize: '$h3',  
  color: '$grey600',
  fontWeight: 'bold',
  marginTop: '.5rem'
})
const Desc = css({
  fontSize: '$h3',
  color: '$grey300',
  fontWeight: '',
  minHeight: '3.25rem',
  wordBreak: 'break-word',
  margin: '.2rem 0rem'
})

const Category = styled('div', {
  backgroundColor: '$white600',
  width: 'min-content',
  fontSize: '0.8125rem',
  fontFamily: '$jost',
  padding: '.375rem 1rem',
  borderRadius: '10px',
  border: 'none',
  fontWeight: '$semibold',
  color: '$grey900',
  variants: {
    active: {
      true: {
        background: '$grey900',
        color: 'white'
      }
    }
  }
})

const LinkStyle = css({
  "&::after": {
    position: "absolute",
    inset: "0",
    content: "",
    display: "block",
  },
  '&:active': {
    color: '$grey900'
  },
  '&:hover': {
    color: '$grey900'
  }
})

const StyledVotes = {
  flexDirection: 'row',
  margin: '0',
  height: 'min-content',
  zIndex: '5'
}

const RoadmapPageCard: React.FC<RoadmapPageCardProps> = ({
  status,
  title,
  desc,
  category,
  votes,
  commentsNumber,
  uuid
}) => {
  return (
    <RoadmapPageCardContainer css={{
      borderTop: `0.375rem solid ${getDotByType(status)}`,
    }}>
      
      <div>
      <Container>
        <Dot css={{
          backgroundColor: `${getDotByType(status)}`
        }}/>
        <div className={Type()}>{status}</div>
      </Container>
      <div className={Title()}>
        <Link href={`/feedback/${uuid}`}><a className={LinkStyle()}>{title}</a></Link>
      </div>
      <p className={Desc()}>{desc}</p>
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <Category>{category}</Category>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 'min-content'
        }}>
        <Votes votes={1} active={false} css={StyledVotes}/>
        <div style={{
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center',
          width: 'min-content',
          gap: '1rem',
          height:'min-content'
        }}>
        <Comments />
        <h4 style={{
          margin: '0'
        }}>{commentsNumber}</h4>
        </div>
        </div>
      </div>
    </RoadmapPageCardContainer>
  )
}

export default RoadmapPageCard