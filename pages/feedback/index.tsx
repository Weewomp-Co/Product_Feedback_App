import FeedbackHeader from "@/components/feedback/header";
import { NavBar } from "@/components/feedback/navbar";
import { sortBySelected } from "@/components/feedback/navbar/sortby";
import { NoPosts } from "@/components/feedback/no-posts";
import Roadmap from "@/components/feedback/roadmap-card";
import { ShowPosts } from "@/components/feedback/show-posts";
import Buttons from "@/components/shared/buttons";
import { GetFeedbackPost } from "@/lib/feedback.module";
import { withSessionSsr } from "@/lib/withSession.module";
import {
  Container,
  FeedbackProfileLeftContainer,
  FeedbackProfileRightContainer,
  InnerLeftContainer,
  InnerRightContainer,
} from "@/styles/feedback";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import { Status } from "@prisma/client";
import { roadmapAtom } from "@/lib/stores";
import { useEffect, useMemo } from "react";

const Page: NextPage = () => {
  const [sortBy] = useAtom(sortBySelected);
  const feedbacks = useQuery<GetFeedbackPost[]>(
    ["feedbacks", sortBy],
    async () => {
      const response = await fetch("/api/feedback/").then(
        (res) => res.json() as Promise<GetFeedbackPost[]>
      );

      return response.sort((a, b) => {
        if (sortBy === "Most Upvotes") return b._count.votes - a._count.votes;
        if (sortBy === "Least Upvotes") return a._count.votes - b._count.votes;
        if (sortBy === "Most Comments")
          return b.comments.length - a.comments.length;
        if (sortBy === "Least Comments")
          return a.comments.length - b.comments.length;
        return 1;
      });
    }
  );

  const RoadmapResultDefault = { Planned: 0, InProgress: 0, Live: 0 };
  const RoadmapResults = useMemo(() => {
    return feedbacks.data?.reduce(
      (total, curr) => {
        if (curr.status === Status.Live) total.Live += 1;
        if (curr.status === Status.Planned) total.Planned += 1;
        if (curr.status === Status.Progress) total.InProgress += 1;
        return total;
      },
      { ...RoadmapResultDefault }
    );
  }, [feedbacks]);

  const RoadmapProps = RoadmapResults ? RoadmapResults : RoadmapResultDefault;
  const [roadmapAtomResult, setRoadmapAtomResult] = useAtom(roadmapAtom);
  useEffect(() => {
    if (
      RoadmapResults &&
      JSON.stringify(RoadmapResults) !== JSON.stringify(roadmapAtomResult)
    )
      setRoadmapAtomResult(RoadmapResults);
  }, [RoadmapResults, roadmapAtomResult]);

  return (
    <main className={Container()}>
      <section className={InnerLeftContainer()}>
        <FeedbackHeader title="Frontend Mentor" subtitle="Feedback Board" />
        <Buttons
          className={FeedbackProfileLeftContainer()}
          type="three"
          css={{ textAlign: "left", padding: ".75rem 23px" }}
        >
          View Profile
        </Buttons>
        <Roadmap {...RoadmapProps} />
      </section>

      <section className={InnerRightContainer()}>
        <Buttons
          className={FeedbackProfileRightContainer()}
          type="three"
          css={{ textAlign: "left", padding: ".75rem 23px" }}
        >
          View Profile
        </Buttons>
        <NavBar suggestions={feedbacks?.data?.length ?? 0} />
        {feedbacks?.data?.length === 0 && <NoPosts />}
        {feedbacks.data && feedbacks?.data?.length > 0 && (
          <ShowPosts posts={feedbacks.data} />
        )}
      </section>
    </main>
  );
};

export default Page;

export const getServerSideProps = withSessionSsr(({ req }) => {
  if (!req.session.user) {
    return {
      redirect: {
        permanent: true,
        destination: "/auth/signin",
      },
    };
  }

  return {
    props: {},
  };
});
