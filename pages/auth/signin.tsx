import type { NextPage } from "next";
import AuthContainer from "@/components/shared/layouts/AuthContainer";
import Input from "@/components/shared/input/Input";
import Button from "@/components/shared/buttons";
import { inputStyle, InputLabel, Container, ButtonsWrapper } from "@/styles/signup"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { withSessionSsr } from "@/lib/withSession.module";
import { css, styled } from "stitches.config";

const Validation = z
  .object({
    email: z.string(),
    password: z.string(),
  })

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
      email: v4(),
      password: v4(),
    });
  }, []);

  const [responseErrors, setResponseErrors] = useState([])

  const AuthContainerOverides = css({
    display: 'grid',
  })

  const SignInStyle = css({
    backgroundColor: 'blue'
  })

  const ButtonsWrapper = css({
    display: 'flex',
    gap: '1rem',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    '@md': {
      flexDirection: 'row',
    },
    marginTop: '2rem' 

  })

  const ErrorText = css({
    fontFamily: '$jost', 
    fontSize: '$body2',
    color: "$red"
  })

  const FormStyle = css({
    display: "grid",
    gridTemplateRows: 'repeat(4, max-content) 1fr',
  })

  const Container = css({
    height: '100%',
    display: 'grid'
  })

  const router = useRouter()
  const onValid = handleSubmit(
    // on valid
    async (data) => {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        body: JSON.stringify({ ...data}),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        router.push("/feedback")
        console.log(response)
      } 

      

      const result = await response.json()
      if (result?.email?._errors)
        setError("email", { message: result.email._errors?.[0] });
      if (result?.username?._errors)
        setError("password", { message: result.password._errors?.[0] });
      
      console.log(result._errors)
      setResponseErrors(result._errors);
    }
  );

  return (
      <AuthContainer className={`${AuthContainerOverides()}`} title="Sign in" href="/auth/signin">
        <div className={Container()}>
        <form onSubmit={onValid} className={FormStyle()}>
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
          {
            (responseErrors?.map((error, index) => <h4 key={index} className={ErrorText()}>{error}</h4>))
          }
          <div className={ButtonsWrapper()}>
            <Button type="four" css={{
              backgroundColor: '#28A7ED',
              '&:hover' :{
                backgroundColor: '#86c8ed'
              },
              width: '137px'
            }}>Sign in</Button>
            <Button type="four" as="a" href="/" css={{
              backgroundColor: '#E84D70',
              '&:hover': {
                backgroundColor: '#e87891'
              }
            }}>Sign up</Button>
          </div>
        </form>
        </div>
      </AuthContainer>
    
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
