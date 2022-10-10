import { withSessionSsr } from "@/lib/withSession.module";
import type { NextPage } from "next";

const Page: NextPage = () => {
	return <div>
		<h1>Hello world</h1>
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
