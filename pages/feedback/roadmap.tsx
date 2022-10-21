import { NextPage } from "next";
import { styled, css } from "stitches.config";
import Button from "@/components/shared/buttons";
import { BackArrow } from "@/assets/backArrow";
import RoadmapPageCard from '@/components/roadmap/roadmap-page-card'

const Page: NextPage = () => {

  const Container = css({
    width: '100vw',
    height: '100vh',
    padding: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'jost'
  })

  const ContentContainer = css({
    display: 'flex',
    maxWidth: '67.5rem',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    gap: '3rem'
  })

  const navBar = css({
    backgroundColor: '#373F68',
    maxHeight: '7rem',
    width: '100%',
    height: '100%',
    borderRadius: '0.625rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    padding: '2rem'
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
    height: '40rem',
    backgroundColor: 'aliceblue'
  })

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
            }}><BackArrow />Go Back</Button>
            <h1 className={navTitle()}>Roadmap</h1>
          </div>

          <div>
            <Button color={"one"}>+ Add Feedback</Button>
          </div>
        </div>

        <div className={FeedbackSection()}>
            <RoadmapPageCard status={"Planned"} title={"Mock title"} desc={"Mock desc here"} category={"Feature"} votes={2} commentsNumber={3} id={'1asdfasdf'}/>
            <RoadmapPageCard status={"In-Progress"} title={"Mock title"} desc={"It would be great to see a more detailed breakdown of solutions."} category={"Feature"} votes={2} commentsNumber={3} id={'1asdfasdf'}/>
        </div>
      </div>
    </main>
  )
}

export default Page