import { useAtom, atom } from "jotai";
import { styled, css } from "stitches.config";
import React from "react";
import {Dot, RoadmapPageCardContainer, Container, Type, Title, Desc, Category, LinkStyle, StyledVotes , VotesSection, CommentsWrapper, ContentWrapper} from './styles'
import Votes from '@/components/shared/votes/Votes'
import {Comments} from '@/assets/comments'
import Link from 'next/link'
import { queryClientAtom } from "jotai/query";
import { Dispatch } from "react";
import {userAtom} from '@/lib/stores'

type RoadmapPageCardProps = {
  status: string;
  title?: string;
  desc?: string;
  category?: string;
  votes: number;
  commentsNumber?: number;
  uuid?: string
  active: boolean
}

const RoadmapPageCard: React.FC<RoadmapPageCardProps> = ({
  status,
  title,
  desc,
  category,
  votes,
  commentsNumber,
  uuid,
  active
}) => {
  const [user] = useAtom(userAtom)
  const [queryClient] = useAtom(queryClientAtom)
  const [_, dispatch] = useAtom(userAtom)

  const StatusToColor: Record<string, string> = {
    'Planned': '#F49F85',
    'Progress': '#AD1FEA',
    'Live': '#62BCFA'
  }

  const onVote = async () => {
    await fetch(`/api/feedback/${uuid}/votes`, {
      method: 'POST'
    })

    queryClient.invalidateQueries(['feedbacks'])
    queryClient.invalidateQueries(['feedbackPost'])
    dispatch({ type: 'refetch' })
  }

  return (
    <RoadmapPageCardContainer css={{
      borderTop: `0.375rem solid ${StatusToColor[status] ?? 'transparent'}`,
    }}>
      
      <div>
        <Container>
          <Dot css={{
            backgroundColor: `${StatusToColor[status] ?? 'transparent'}`
          }}/>
          <div className={Type()}>{status}</div>
        </Container>
        <div className={Title()}>
          <Link href={`/feedback/${uuid}`}><a className={LinkStyle()}>{title}</a></Link>
        </div>
        <p className={Desc()}>{desc}</p>
      </div>
      <div className={VotesSection()}>
        <Category>{category}</Category>
        <div className={ContentWrapper()}>
          <Votes votes={votes} active={active} css={StyledVotes} onClick={onVote}/>
          <div className={CommentsWrapper()}>
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