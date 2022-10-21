import { styled, css } from "stitches.config";
import React from "react";
import {Dot} from './styles'
import Votes from '@/components/shared/votes/Votes'
import {Comments} from '@/assets/comments'

type RoadmapPageCardProps = {
  status?: string;
  title?: string;
  desc?: string;
  category?: string;
  votes?: number;
  commentsNumber?: number;
  id?: string
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
  justifyContent: 'start',
  alignItems: 'start',
  borderRadius: '.3rem',
  padding: '2rem',
  flexDirection: 'column',
  fontFamily: 'jost'
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
  minHeight: '3.25rem'
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

const StyledVotes = {
  flexDirection: 'row',
}

const RoadmapPageCard: React.FC<RoadmapPageCardProps> = ({
  status,
  title,
  desc,
  category,
  votes,
  commentsNumber,
  id
}) => {
  return (
    <RoadmapPageCardContainer css={{
      borderTop: `0.375rem solid ${getDotByType(status)}`,
    }}>
      <Container>
        <Dot css={{
          backgroundColor: `${getDotByType(status)}`
        }}/>
        <div className={Type()}>{status}</div>
      </Container>
      <div style={{
        width: '100%'
      }}>
        <div className={Title()}>{title}</div>
        <p className={Desc()}>{desc}</p>
        <Category>{category}</Category>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem'
        }}>
        <Votes votes={1} active={false} css={StyledVotes}/>
        <div style={{
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center',
          width: 'min-content',
          gap: '1rem'
        }}>
        <Comments />
        <h4>{commentsNumber}</h4>
        </div>
        </div>
      </div>
    </RoadmapPageCardContainer>
  )
}

export default RoadmapPageCard