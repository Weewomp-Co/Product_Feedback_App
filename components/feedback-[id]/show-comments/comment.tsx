import { GetFeedbackPost } from "@/lib/feedback.module";
import { userAtom } from "@/lib/stores";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CommentContainer } from "./styles";
import Trash from "@/assets/trash.svg";
import { CommentFormInput } from "../comments-form/styles";
import Input from "@/components/shared/input/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Buttons from "@/components/shared/buttons";

type CommentProps = {
  comment: Omit<GetFeedbackPost["comments"][number], "children"> &
    Partial<Pick<GetFeedbackPost["comments"][number], "children">>;
  parentId?: string;
  replyToUsername?: string;
};

export const Validation = z.object({
  content: z.string().trim().min(25).max(250),
});

export const Comment: React.FC<CommentProps> = ({
  comment,
  parentId,
  replyToUsername,
}) => {
  const [user] = useAtom(userAtom);
  const queryClient = useQueryClient();
  const resolver = zodResolver(Validation);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof Validation>>({ resolver });

  const [showReply, setShowReply] = useState(false);
  const onDeleteComment = useCallback(async () => {
    if (!user) return;
    const response = await fetch(
      `/api/feedback/${comment.postId}/comments/${comment.id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      queryClient.invalidateQueries(["feedbackPost"]);
    }
  }, [comment, user, queryClient]);

  const onToggleReply = () => setShowReply(!showReply);

  const onReply = useCallback(
    async ({ content }: { content: string }) => {
      const replyToId = !!comment.children ? undefined : comment.userId;

      const response = await fetch(`/api/feedback/${comment.postId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          replyToId: replyToId,
          parentId: parentId ?? comment.id,
          content,
        }),
      });

      if (response.ok) {
        queryClient.invalidateQueries(["feedbackPost"]);
        reset();
        setShowReply(false);
      }
    },
    [comment, parentId, queryClient, reset]
  );

  const onReplySubmit = handleSubmit(onReply);
  const ref = useRef<HTMLDivElement>(null);
  const [lastCommentHeight, setLastCommentHeight] = useState(0);

  useEffect(() => {
    const onResize = () => {
      if (ref.current) {
        const lastComment = ref.current.querySelector(".subcomment:last-of-type");
        const getBoundingRect = lastComment?.getBoundingClientRect();
        if (getBoundingRect) setLastCommentHeight(getBoundingRect.height - 20);
      }
    }

    const observer = new ResizeObserver(onResize)
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref]);

  return (
    <CommentContainer className={!comment.children ? "subcomment" : undefined}>
      <Image
        className="comment-profile"
        src={`https://avatars.dicebear.com/api/initials/${comment.user?.username}.svg`}
        width="40px"
        height="40px"
        alt=""
      />

      {(comment.children?.length ?? 0) > 0 && (
        <div
          className="comment-hr"
          style={{ "--retract-height": `${lastCommentHeight}px` } as any}
        ></div>
      )}

      <div className="comment-user-details">
        <h3>{comment.user?.username}</h3>
        <p>@{comment.user?.username}</p>
      </div>

      <p className="comment-content">
        {replyToUsername && <span>@{replyToUsername}</span>} {comment.content}
      </p>
      <div className="comment-controls">
        <button className="comment-reply" onClick={onToggleReply}>
          reply
        </button>
        {user.id === comment.userId && (
          <button onClick={onDeleteComment} className="comment-delete">
            <Image src={Trash} width={21} height={21} alt="Delete" />
          </button>
        )}
      </div>

      <div className="comment-reply-container">
        {showReply && (
          <form onSubmit={onReplySubmit} className="comment-reply-control">
            <Input
              type="text"
              isError={!!errors.content?.message}
              errorMessage={errors.content?.message ?? ""}
              css={{ ...CommentFormInput, marginBottom: "0" }}
              as="textarea"
              register={register("content")}
            />

            <Buttons color="one">Post Reply</Buttons>
          </form>
        )}

        {(comment.children?.length ?? 0) > 0 && (
          <div className="comment-replies" ref={ref}>
            {comment.children?.map((reply) => (
              <Comment
                key={reply.id}
                comment={reply}
                parentId={comment.id}
                replyToUsername={
                  reply.replyTo?.username ?? comment.user?.username
                }
              />
            ))}
          </div>
        )}
      </div>
    </CommentContainer>
  );
};
