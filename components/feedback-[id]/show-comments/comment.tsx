import { GetFeedbackPost } from "@/lib/feedback.module";
import { userAtom } from "@/lib/stores";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Image from "next/image";
import { useCallback, useState } from "react";
import { CommentContainer } from "./styles";
import Trash from "@/assets/trash.svg";
import { CommentFormInput } from "../comments-form/styles";
import Input from "@/components/shared/input/Input";

type CommentProps = {
  comment: Omit<GetFeedbackPost["comments"][number], 'children'> & Partial<Pick<GetFeedbackPost["comments"][number], 'children'>>,
  parentId?: string
};

export const Comment: React.FC<CommentProps> = ({ comment, parentId }) => {
  const [user] = useAtom(userAtom);
  const queryClient = useQueryClient();

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

  const [showReply, setShowReply] = useState(false)
  const onToggleReply = () => setShowReply(!showReply)

  const onReply = useCallback(async () => {
      const replyToId = !!comment.children ? undefined : comment.id

      const response = await fetch(`/api/feedback/${comment.postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // TODO: make sure to include reply content dumbass 
          replyToId: replyToId,
          parentId,
        })  
      })

      if (response.ok) {
        queryClient.invalidateQueries(["feedbackPost"]);
      }
  }, [comment, parentId, queryClient])

  return (
    <CommentContainer>
      <Image
        src={`https://avatars.dicebear.com/api/initials/${comment.user?.username}.svg`}
        width="40px"
        height="40px"
        alt=""
      />
      <div>
        <h3>{comment.user?.username}</h3>
        <p>@{comment.user?.username}</p>
      </div>

      <p className="comment-content">{comment.content}</p>
      <div className="comment-controls">
        <button className="comment-reply" onClick={onToggleReply}>reply</button>
        {user.id === comment.userId && (
          <button onClick={onDeleteComment} className="comment-delete">
            <Image src={Trash} width={21} height={21} alt="Delete" />
          </button>
        )}
      </div>

      {showReply && <div className="comment-reply-control">
        <Input type="text" isError={false} errorMessage={'boop['} css={CommentFormInput} as="textarea" />
      </div>}

      {comment.children && <div className="comment-replies">
        {comment.children.map(reply => (
            <Comment key={reply.id} comment={reply} parentId={comment.id} />
        ))}
      </div>}
    </CommentContainer>
  );
};
