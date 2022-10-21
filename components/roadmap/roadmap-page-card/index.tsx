import { styled, css } from "stitches.config";
import React from "react";
import {Dot} from './styles'
import Votes from '@/components/shared/votes/Votes'

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
    case 'In-Progress':
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
  marginTop: '1rem'
  // marginTop: '1rem'
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
      <div>
        <div className={Title()}>{title}</div>
        <p className={Desc()}>{desc}</p>
        <Category>{category}</Category>
        <Votes votes={1} active={false} css={StyledVotes}/>
      </div>
    </RoadmapPageCardContainer>
  )
}

export default RoadmapPageCard