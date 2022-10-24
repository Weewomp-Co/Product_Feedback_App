import type { NextPage } from "next";
import AuthContainer from "@/components/shared/layouts/AuthContainer";
import Input from "@/components/shared/input/Input";
import Button from "@/components/shared/buttons";
import { inputStyle, InputLabel, Container, ButtonsWrapper, ForgotPassword } from "@/styles/signup"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { withSessionSsr } from "@/lib/withSession.module";

const Validation = z
  .object({
    username: z.string().min(1).max(8),
    email: z.string().email(),
    password: z.string().min(8),
    confirm: z.string(),
  })
  .refine((input) => input.password === input.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });

const Page: NextPage = () => {
  const resolver = zodResolver(Validation);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<z.infer<typeof Validation>>({
    resolver,
  });

  const [ids, setIds] = useState<Partial<z.infer<typeof Validation>>>({});
  useEffect(() => {
    setIds({
      username: v4(),
      email: v4(),
      password: v4(),
      confirm: v4(),
    });
  }, []);

  const router = useRouter()
  const onValid = handleSubmit(
    // on valid
    async (data) => {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ ...data, confirm_password: data.confirm }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        router.push("/verify")
      } 

      const result = await response.json()
      if (result?.email?._errors)
        setError("email", { message: result.email._errors?.[0] });
      if (result?.username?._errors)
        setError("username", { message: result.username._errors?.[0] });
      if (result?.password?._errors)
        setError("password", { message: result.password._errors?.[0] });
      if (result?.confirm_password?._errors)
        setError("confirm", { message: result.confirm_password._errors?.[0] });
    }
  );

  return (
    <div className={Container()}>
      <AuthContainer title="Sign up" href="/auth/signin">
        <form onSubmit={onValid}>
          <InputLabel htmlFor={ids.username}>Username</InputLabel>
          <Input
            id={ids.username}
            isError={!!errors.username}
            errorMessage={errors.username?.message ?? ""}
            type={"text"}
            css={inputStyle}
            register={register("username")}
          />
          <InputLabel htmlFor={ids.email}>Email</InputLabel>
          <Input
            id={ids.email}
            isError={!!errors.email}
            errorMessage={errors.email?.message ?? ""}
            type={"text"}
            css={inputStyle}
            register={register("email")}
          />
          <InputLabel htmlFor={ids.password}>Password</InputLabel>
          <Input
            id={ids.password}
            isError={!!errors.password}
            errorMessage={errors.password?.message ?? ""}
            type="password"
            css={inputStyle}
            register={register("password")}
          />
          <InputLabel htmlFor={ids.confirm}>Confirm Password</InputLabel>
          <Input
            id={ids.confirm}
            isError={!!errors.confirm}
            errorMessage={errors.confirm?.message ?? ""}
            type="password"
            css={inputStyle}
            register={register("confirm")}
          />

          <div className={ButtonsWrapper()}>
            <Button color="four">Sign up</Button>
            <Button className={ForgotPassword()} color="five" as="a" href="/">
              forgot password
            </Button>
          </div>
        </form>
      </AuthContainer>
    </div>
  );
};

export const getServerSideProps = withSessionSsr(({ req }) => {
  if (req.session.user) {
    return {
      redirect: {
        permanent: true,
        destination: '/feedback'
      }
    }
  }

  return {
    props: {}
  }
})

export default Page;
