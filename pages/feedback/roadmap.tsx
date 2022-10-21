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

type ShowProps = {
  posts: GetFeedbackPost[]
}

const ShowPlanned: React.FC<ShowProps> = ({
  posts
}) => {
  
  return<div style={{
    maxWidth: '21.875rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
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
      <RoadmapPageCard title={item.title} status={item.status} desc={item.details} category={item.category} commentsNumber={item.comments.length} key={item.id} uuid={item.id}/> )
  }
  </div>
}

const ShowInProgress: React.FC<ShowProps> = ({
  posts
}) => {
  
  return<div style={{
    maxWidth: '21.875rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
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
      <RoadmapPageCard title={item.title} status={item.status} desc={item.details} category={item.category} commentsNumber={item.comments.length} key={item.id} uuid={item.id}/> )
  }
  </div>
}

const ShowLive: React.FC<ShowProps> = ({
  posts
}) => {
  
  return<div style={{
    maxWidth: '21.875rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
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
      <RoadmapPageCard title={item.title} status={item.status} desc={item.details} category={item.category} commentsNumber={item.comments.length} key={item.id} uuid={item.id}/> )
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

  const Container = css({
    maxWidth: '100vw',
    minHeight: '100vh',
    padding: '0rem',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    fontFamily: 'jost',
    backgroundColor: '$white300',
    '@md': {
      padding: '3rem',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  const ContentContainer = css({
    display: 'flex',
    maxWidth: '67.5rem',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    gap: '0rem',
    '@md': {
    gap: '3rem'
    }
  })

  const navBar = css({
    backgroundColor: '#373F68',
    maxHeight: '7rem',
    width: '100%',
    height: '100%',
    borderRadius: '0rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    padding: '2rem',
    '@md': {
      borderRadius: '0.625rem'
    }
  })

  const navWrapper = css({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
    textAlign: 'center'
  })

  const navTitle = css({
    fontSize: '$h1',
    fontWeight: 'bold',
    lineHeight: '$h1',
    margin:'0',
    padding: '0'
  })

  const FeedbackSection = css({
    display: 'flex',
    width: '100%',
    minHeight: '40rem',
  })

  const DesktopContainer = styled('div', {
    display: 'none',
    '@md': {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      width:'100%',
      gap: '1.5rem'
    }
  })

  const MobileContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '@md': {
      display: 'none'
    }
  })

  const MobileButton = styled('button', {
    backgroundColor: 'transparent',
    border: 'none',
    fontFamily: 'jost',
    fontSize: '$h3',
    color: '$grey600',
    fontWeight: 'bold',
    height: 'inherit',
    borderBottom: '.2rem solid transparent',
    width: '100%',
    opacity: '0.4'
  })

  const PlannedSelected = {
    borderBottom: '.2rem solid #F49F85',
    color: 'black',
    opacity: '1'
  }

  const ProgressSelected = {
    borderBottom: '.2rem solid #AD1FEA',
    color: 'black',
    opacity: '1'
  }

  const LiveSelected = {
    borderBottom: '.2rem solid #62BCFA',
    color: 'black',
    opacity: '1'
  }
  

  return (
    <main className={Container()}>
      <div className={ContentContainer()}> 
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
            {/* <RoadmapPageCard status={"Planned"} title={"Mock title"} desc={"Mock desc here"} category={"Feature"} votes={2} commentsNumber={3} id={'1asdfasdf'}/>
            <RoadmapPageCard status={"In-Progress"} title={"Mock title"} desc={"It would be great to see a more detailed breakdown of solutions."} category={"Feature"} votes={2} commentsNumber={3} id={'1asdfasdf'}/> */}
            
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
                
                  <div style={{
                    display: 'flex',
                    width: '100%',
                    height: '3.75rem',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderBottom: '1px solid #8C92B319',
                    marginBottom: '1.5rem',
                    position: 'relative'
                  }}>
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
                    <ShowPlanned posts={feedbacks.data}/>
                  ) : (selected === "Progress") ? (<ShowInProgress posts={feedbacks.data}/>) : (selected ==="Live") ? (<ShowLive posts={feedbacks.data}/>) : (<></>)
                  }
              </MobileContainer>
              }
            </div> : (<></>)
            }
        </div>
      </div>
    </main>
  )
}

export default Page