import Buttons from "@/components/shared/buttons";
import Input from "@/components/shared/input/Input";
import { userAtom } from "@/lib/stores";
import { InputLabel } from "@/styles/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { css } from "stitches.config";
import { z } from "zod";
import {
  ProfileBottomNav,
  ProfileCard,
  ProfileInputContainer,
  ProfileUsername,
} from "./styles";

const Validaton = z
  .object({
    username: z.string().trim().min(1).max(8),
    password: z.optional(z.string().trim().min(8)),
    confirm: z.string().optional(),
  })
  .refine((input) => input.password === input.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });

export const ProfileForm: React.FC = () => {
  const [user, dispatch] = useAtom(userAtom);
  const router = useRouter();

  const resolver = zodResolver(Validaton);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset
  } = useForm<z.infer<typeof Validaton>>({
    resolver,
    defaultValues: {
      username: user.username ?? "",
      password: undefined,
      confirm: undefined,
    },
  });
  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch(`/api/auth/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      dispatch({ type: "refetch" });
      reset({ password: undefined, confirm: undefined })
    } else {
      const result = await response.json();

      if (result.username?._errors?.[0])
        setError("username", { message: result.username?._errors?.[0] });
      if (result.password?._errors?.[0])
        setError("password", { message: result.password?._errors?.[0] });
      if (result.confirm?._errors?.[0])
        setError("confirm", { message: result.confirm?._errors?.[0] });
    }
  });

  const onDelete = async () => {
    const response = await fetch(`/api/auth/${user.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/auth/signin");
    }
  };

  const onSignOut = async () => {
    const response = await fetch(`/api/auth/signout`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/auth/signin");
    }
  };

  const [showCard, setShowCard] = useState(false);
  useEffect(() => {
    if (user) setShowCard(true);
  }, [user]);

  if (!showCard) return <></>;
  return (
    <ProfileCard onSubmit={onSubmit}>
      <ProfileUsername>{user.username} Profile</ProfileUsername>

      <ProfileInputContainer>
        <div>
          <InputLabel htmlFor={"username"}>
            Username <span className={css({ color: "$red" })()}>*</span>
          </InputLabel>
          <Input
            id="username"
            type="text"
            isError={!!errors.username}
            errorMessage={errors?.username?.message ?? ""}
            register={register("username")}
            css={{ width: "100%" }}
          />
        </div>

        <div>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            isError={!!errors.password}
            errorMessage={errors?.password?.message ?? ""}
            register={register("password", {
              required: false,
              setValueAs: (val: string) => (val.length > 0 ? val : undefined),
            })}
            css={{ width: "100%" }}
          />
        </div>

        <div>
          <InputLabel htmlFor="confirm">Confirm Password</InputLabel>
          <Input
            id="confirm"
            type="password"
            isError={!!errors.confirm}
            errorMessage={errors?.confirm?.message ?? ""}
            register={register("confirm", {
              required: false,
              setValueAs: (val: string) => (val.length > 0 ? val : undefined),
            })}
            css={{ width: "100%" }}
          />
        </div>
      </ProfileInputContainer>

      <ProfileBottomNav>
        <Buttons type="button" color="four" onClick={onDelete}>
          Delete
        </Buttons>

        <Buttons color="two">Submit</Buttons>

        <Buttons type="button" color="three" onClick={onSignOut}>
          Sign out
        </Buttons>
      </ProfileBottomNav>
    </ProfileCard>
  );
};
