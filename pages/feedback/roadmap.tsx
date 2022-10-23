import { NextPage } from "next";
import Button from "@/components/shared/buttons";
import { BackArrow } from "@/assets/backArrow";
import { useQuery } from "@tanstack/react-query";
import { GetFeedbackPost } from "@/lib/feedback.module";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  ContentContainer,
  navBar,
  navWrapper,
  navTitle,
  FeedbackSection,
  DesktopContainer,
  MobileContainer,
  MobileButton,
  PlannedSelected,
  ProgressSelected,
  LiveSelected,
  MobileNavWrapper,
  PostsWrapper,
  AddFeedback,
} from "@/styles/roadmap";
import { RoadmapStatusContainer } from "@/components/roadmap/roadmap-status-container";
import { Status } from "@prisma/client";

const Page: NextPage = () => {
  const [selected, setSelected] = useState("Planned");
  const router = useRouter();
  const feedbacks = useQuery<GetFeedbackPost[]>(["feedbacks"], async () => {
    const response = await fetch("/api/feedback/").then(
      (res) => res.json() as Promise<GetFeedbackPost[]>
    );

    return response.filter((post) => post.status != "Suggestion");
  });

  const ReduceByStatus = (status: Status) => (total: number, curr: GetFeedbackPost) => {
    return total + (curr.status === status ? 1 : 0)
  }

  return (
    <main className={Container()}>
      <section className={ContentContainer()}>
        <div className={navBar()}>
          <div className={navWrapper()}>
            <Button
              color={"five"}
              css={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                height: "fit-content",
                padding: "0",
              }}
              onClick={() => {
                router.back();
              }}
            >
              <BackArrow />
              Go Back
            </Button>
            <h2 className={navTitle()}>Roadmap</h2>
          </div>

          <div>
            <Button
              className={AddFeedback()}
              color={"one"}
              onClick={() => {
                router.push("/feedback/create");
              }}
            />
          </div>
        </div>

        <div className={FeedbackSection()}>
          {feedbacks.data && (
            <div
              style={{
                width: "100%",
              }}
            >
              <DesktopContainer>
                <RoadmapStatusContainer posts={feedbacks.data} status="Planned" />
                <RoadmapStatusContainer posts={feedbacks.data} status="Progress" />
                <RoadmapStatusContainer posts={feedbacks.data} status="Live" />
              </DesktopContainer>
              {
                <MobileContainer>
                  <div className={MobileNavWrapper()}>
                    <MobileButton
                      onClick={() => {
                        setSelected("Planned");
                      }}
                      css={selected === "Planned" ? PlannedSelected : {}}
                    >
                      Planned ({feedbacks?.data?.reduce(ReduceByStatus("Planned"), 0)})
                    </MobileButton>
                    <MobileButton
                      onClick={() => {
                        setSelected("Progress");
                      }}
                      css={selected === "Progress" ? ProgressSelected : {}}
                    >
                      In-Progress ({feedbacks?.data?.reduce(ReduceByStatus("Progress"), 0)})
                    </MobileButton>
                    <MobileButton
                      onClick={() => {
                        setSelected("Live");
                      }}
                      css={selected === "Live" ? LiveSelected : {}}
                    >
                      Live ({feedbacks?.data?.reduce(ReduceByStatus("Live"), 0)})
                    </MobileButton>
                  </div>
                  {selected === "Planned" ? (
                    <div className={PostsWrapper()}>
                      <RoadmapStatusContainer posts={feedbacks.data} status="Planned" />
                    </div>
                  ) : selected === "Progress" ? (
                    <div className={PostsWrapper()}>
                      <RoadmapStatusContainer posts={feedbacks.data} status="Progress" />
                    </div>
                  ) : selected === "Live" ? (
                    <div className={PostsWrapper()}>
                      <RoadmapStatusContainer posts={feedbacks.data} status="Live" />
                    </div>
                  ) : (
                    <></>
                  )}
                </MobileContainer>
              }
            </div>
          )} 
        </div>
      </section>
    </main>
  );
};

export default Page;
