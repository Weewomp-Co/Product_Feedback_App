import { BackArrow } from "@/assets/backArrow";
import { CommentForm } from "@/components/feedback-[id]/comments-form";
import { ShowComments } from "@/components/feedback-[id]/show-comments";
import FeedbackPreview from "@/components/feedback/preview";
import Buttons from "@/components/shared/buttons";
import { GetFeedbackPost } from "@/lib/feedback.module";
import { userAtom } from "@/lib/stores";
import { withSessionSsr } from "@/lib/withSession.module";
import {
  FeedbackIDInnerContainer,
  FeedbackIDMain,
  GoBack,
  TopNavContainer,
} from "@/styles/feedback-id";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type PageProps = { id: string };
const Page: NextPage<PageProps> = ({ id }) => {
  const router = useRouter();
  const [user] = useAtom(userAtom);
  const post = useQuery<GetFeedbackPost>(["feedbackPost", id], async () => {
    const response = await fetch(`/api/feedback/${id}`).then((res) =>
      res.json()
    );

    if (response._errors) router.push("/feedback");
    return response;
  });

  const onGoBack = () => {
    router.back();
  };

  const [isOwner, setIsOwner] = useState(false)
  useEffect(() => {
    if (!user || !user?.id) return
    setIsOwner(user.id === post.data?.userId || user.role === "ADMIN")
  }, [post, user])

  return (
    <FeedbackIDMain>
      <FeedbackIDInnerContainer>
        <TopNavContainer>
          <Buttons onClick={onGoBack} className={GoBack()} css={{ padding: '12px 0' }} color="five">
            <BackArrow />
            Go Back
          </Buttons>

          {isOwner && (
            <Buttons color="two" onClick={() => {
              router.push(`/feedback/${id}/edit`)
            }}>Edit Feedback</Buttons>
          )}
        </TopNavContainer>

        {post.data && (
          <FeedbackPreview
            votes={post.data?._count?.votes ?? 0}
            active={user.votes?.some(
              ({ feedbackId }) => post.data?.id === feedbackId
            )}
            Title={post.data?.title}
            Subtitle={post.data.details}
            commentsNumber={post.data._count?.comments ?? 0}
            uuid={post.data.id}
            Category={post.data.category}
          />
        )}

        {post?.data && <ShowComments post={post.data} />}
        {post?.data && <CommentForm id={post.data?.id} />}
      </FeedbackIDInnerContainer>
    </FeedbackIDMain>
  );
};

export const getServerSideProps = withSessionSsr(({ req, params }) => {
  if (!req.session.user) {
    return {
      redirect: {
        permanent: true,
        destination: "/auth/signin",
      },
    };
  }

  return {
    props: { id: params?.id as string },
  };
});

export default Page;
