import Buttons from "@/components/shared/buttons";
import Input from "@/components/shared/input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CommentFormBottomContainer,
  CommentFormContainer,
  CommentFormHeading,
  CommentFormInput,
} from "./styles";

type CommentFormProps = {
  id: string;
};

const Validation = z.object({
  content: z.string().max(250).min(25),
});

export const CommentForm: React.FC<CommentFormProps> = ({ id }) => {
  const resolver = zodResolver(Validation);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
    reset
  } = useForm<z.infer<typeof Validation>>({ resolver });

  const watchContent = watch('content')
  const queryClient = useQueryClient();
  const onSubmit = handleSubmit(async ({ content }) => {
      const response = await fetch(`/api/feedback/${id}/comments`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
      });

      if (response.ok) {
        queryClient.invalidateQueries(["feedbackPost"]);
        reset()
      } else {
        const result = await response.json()
        if (result?.content?._errors)
          setError("content", { message: result.content._errors?.[0] });
      }
  })

  return (
    <CommentFormContainer onSubmit={onSubmit}>
      <CommentFormHeading>Add Comment</CommentFormHeading>

      <Input
        type="text"
        as="textarea"
        isError={!!errors.content}
        errorMessage={errors.content?.message ?? ''}
        css={CommentFormInput}
        register={register('content')}
      />

      <CommentFormBottomContainer>
        <p>{250 - (watchContent?.length ?? 0)} characters left</p>

        <Buttons color="one">Post Comment</Buttons>
      </CommentFormBottomContainer>
    </CommentFormContainer>
  );
};
