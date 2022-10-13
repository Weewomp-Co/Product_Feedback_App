import { Dropdown } from "@/components/shared/dropdown";
import { withSessionSsr } from "@/lib/withSession.module";
import { atom } from "jotai";
import type { NextPage } from "next";
import { css } from "stitches.config";

const Container = css({
  width: "100vw",
  minHeight: '100vh',
  background: "$white300",
  padding: "3rem"
})

const InnerContainer = css({
  maxWidth: "250px",
  width: "100%"
})

const items = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments", "Testing"]
type Items = (typeof items)[number]
const selected = atom<Items>(items[0])

const Page: NextPage = () => {
	return <div className={Container()}>
    <div className={InnerContainer()}>
      <Dropdown items={items} selected={selected} />
    </div>
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
