import FeedbackHeader from "@/components/feedback/header";
import { NavBar } from "@/components/feedback/navbar";
import { NoPosts } from "@/components/feedback/no-posts";
import Roadmap from "@/components/feedback/roadmap-card";
import { ShowPosts } from "@/components/feedback/show-posts";
import Buttons from "@/components/shared/buttons";
import { withSessionSsr } from "@/lib/withSession.module";
import { Container, FeedbackProfileLeftContainer, FeedbackProfileRightContainer, InnerLeftContainer, InnerRightContainer } from "@/styles/feedback";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";

const Page: NextPage = () => {
  const feedbacks = useQuery(['feedbacks'], async () => {
      return fetch('/api/feedback/')
        .then( res => res.json() )
  })

	return <main className={Container()}>
    <section className={InnerLeftContainer()}>
      <FeedbackHeader title="Frontend Mentor" subtitle="Feedback Board" />
      <Buttons className={FeedbackProfileLeftContainer()} type="three" css={{ textAlign: 'left', padding: '.75rem 23px' }}>View Profile</Buttons>
      <Roadmap Planned={2} InProgress={3} Live={1} />
    </section>
    
    <section className={InnerRightContainer()}>
      <Buttons className={FeedbackProfileRightContainer()} type="three" css={{ textAlign: 'left', padding: '.75rem 23px' }}>View Profile</Buttons>
      <NavBar suggestions={feedbacks?.data?.length ?? 0} />
      {feedbacks?.data?.length === 0 && <NoPosts />}
      {feedbacks?.data?.length > 0 && <ShowPosts posts={feedbacks.data} />}
    </section>
	</main>;
};

export default Page;

export const getServerSideProps = withSessionSsr(({ req }) => {
  if (!req.session.user) {
    return {
      redirect: {
        permanent: true,
        destination: '/auth/signin'
      }
    }
  }

  return {
    props: {}
  }
})
