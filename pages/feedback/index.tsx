import { NavBar } from "@/components/feedback/navbar";
import { withSessionSsr } from "@/lib/withSession.module";
import type { NextPage } from "next";
import { css } from "stitches.config";

const Container = css({
  width: "100vw",
  minHeight: '100vh',
  background: "$white300",
  padding: "3rem"
})

const Page: NextPage = () => {
	return <div className={Container()}>
    <NavBar suggestions={6} />
	</div>;
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
