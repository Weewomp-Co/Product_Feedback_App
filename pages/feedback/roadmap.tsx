import { NextPage } from "next";
import { styled, css } from "stitches.config";
import Button from "@/components/shared/buttons";
import { BackArrow } from "@/assets/backArrow";
import RoadmapPageCard from '@/components/roadmap/roadmap-page-card'
import { useQuery } from "@tanstack/react-query";
import { GetFeedbackPost } from "@/lib/feedback.module";
import {useState, useEffect} from 'react'
import feedback from "pages/api/feedback";
import {useRouter} from 'next/router'
import {userAtom} from '@/lib/stores'
import {useAtom} from 'jotai'
import {Container, ContentContainer, navBar, navWrapper, navTitle, FeedbackSection, DesktopContainer, MobileContainer, MobileButton, PlannedSelected, ProgressSelected, LiveSelected, MobileNavWrapper, PostsWrapper} from '@/styles/roadmap'

type ShowProps = {
  posts: GetFeedbackPost[]
}


const ShowPlanned: React.FC<ShowProps> = ({
  posts
}) => {
  const LabelStyle = css({
    flexDirection: 'column',
    display: 'none',
    '@md': {
      display: 'flex'
    }
  })
  const [user] = useAtom(userAtom)
  return<div style={{
    maxWidth: '21.875rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
    <div className={LabelStyle()}>
      <h3 style={{
        padding: '0',
        margin: '0'
      }}>Planned ({posts.filter(item => item.status === "Planned").length})</h3>
      <p style={{
        padding: '0',
        margin: '0'
      }}>Ideas prioritized for research</p>
    </div>
    {
    posts.filter(item => item.status === "Planned").map(item =>
      <RoadmapPageCard votes={item._count.votes} title={item.title} status={item.status} desc={item.details} category={item.category} commentsNumber={item.comments.length} key={item.id} uuid={item.id} active={user.votes.some(({ feedbackId }) => item.id === feedbackId)}/> )
  }
  </div>
}

const ShowInProgress: React.FC<ShowProps> = ({
  posts
}) => {
  const LabelStyle = css({
    flexDirection: 'column',
    display: 'none',
    '@md': {
      display: 'flex'
    }
  })
  const [user] = useAtom(userAtom)
  return<div style={{
    maxWidth: '21.875rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
    <div className={LabelStyle()}>
      <h3 style={{
        padding: '0',
        margin: '0'
      }}>In-Progress ({posts.filter(item => item.status === "Planned").length})</h3>
      <p style={{
        padding: '0',
        margin: '0'
      }}>Currently being developed</p>
    </div>
    {
    posts.filter(item => item.status === "Progress").map(item =>
      <RoadmapPageCard votes={item._count.votes} title={item.title} status={item.status} desc={item.details} category={item.category} commentsNumber={item.comments.length} key={item.id} uuid={item.id} active={user.votes.some(({ feedbackId }) => item.id === feedbackId)}/> )
  }
  </div>
}

const ShowLive: React.FC<ShowProps> = ({
  posts
}) => {
  const LabelStyle = css({
    flexDirection: 'column',
    display: 'none',
    '@md': {
      display: 'flex'
    }
  })
  const [user] = useAtom(userAtom)
  return<div style={{
    maxWidth: '21.875rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
    <div className={LabelStyle()}>
      <h3 style={{
        padding: '0',
        margin: '0'
      }}>Live ({posts.filter(item => item.status === "Live").length})</h3>
      <p style={{
        padding: '0',
        margin: '0'
      }}>Released features</p>
    </div>
    {
    posts.filter(item => item.status === "Live").map(item =>
      <RoadmapPageCard votes={item._count.votes} title={item.title} status={item.status} desc={item.details} category={item.category} commentsNumber={item.comments.length} key={item.id} uuid={item.id} active={user.votes.some(({ feedbackId }) => item.id === feedbackId)}/> )
  }
  </div>
}


const Page: NextPage = () => {

  const [selected, setSelected] = useState("Planned")

  const router = useRouter();

  const feedbacks = useQuery<GetFeedbackPost[]>(
    ["feedbacks"],
    async () => {
      const response = await fetch("/api/feedback/").then(
        (res) => res.json() as Promise<GetFeedbackPost[]>
      );
        
      return response
        .filter(post => post.status != 'Suggestion')
    }
  );

  return (
    <main className={Container()}>
      <section className={ContentContainer()}> 
        <div className={navBar()}>
          <div className={navWrapper()}>
            <Button color={"five"} css={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              height: 'fit-content',
              padding: '0'
            }} onClick={() => {
              router.back();
            }}><BackArrow />Go Back</Button>
            <h1 className={navTitle()}>Roadmap</h1>
          </div>

          <div>
            <Button color={"one"}>+ Add Feedback</Button>
          </div>
        </div>

        <div className={FeedbackSection()}>
            {
              (feedbacks.data) ?
            <div style={{
              width: '100%'
            }}>
              <DesktopContainer>
                <ShowPlanned posts={feedbacks.data}/>
                <ShowInProgress posts={feedbacks.data} />
                <ShowLive posts={feedbacks.data} />
              </DesktopContainer>
              {
              <MobileContainer>
                
                  <div className={MobileNavWrapper()}>
                    <MobileButton onClick={() => {
                      setSelected("Planned")
                    }} css={(selected === "Planned") ? (PlannedSelected) : ({})}>Planned ({feedbacks?.data?.filter(item => item.status === "Planned").length})</MobileButton>
                    <MobileButton onClick={() => {
                      setSelected("Progress")
                    }} css={(selected === "Progress") ? (ProgressSelected) : ({})}>In-Progress ({feedbacks?.data?.filter(item => item.status === "Progress").length})</MobileButton>
                    <MobileButton onClick={() => {
                      setSelected("Live")
                    }} css={(selected === "Live") ? (LiveSelected) : ({})}>Live ({feedbacks?.data?.filter(item => item.status === "Live").length})</MobileButton>
                  </div>
                  {
                  (selected === "Planned") ? (
                    <div className={PostsWrapper()}>
                      <ShowPlanned posts={feedbacks.data}/>
                    </div>
                  ) : (selected === "Progress") ? (<div className={PostsWrapper()}><ShowInProgress posts={feedbacks.data}/></div>) : (selected ==="Live") ? (<div className={PostsWrapper()}><ShowLive posts={feedbacks.data}/></div>) : (<></>)
                  }
              </MobileContainer>
              }
            </div> : (<></>)
            }
        </div>
      </section>
    </main>
  )
}

export default Page