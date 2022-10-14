import React from 'react'
import Button from '@/components/shared/buttons/index'
import {Container, Section0, PlusButton, Section1, CreateContainer} from '@/styles/create'
import { BackArrow } from '@/assets/backArrow'
import Image from 'next/image'
import { Plus } from '@/assets/Plus'
import Input from '@/components/shared/input/Input'
import { InputLabel } from '@/styles/signup'
import { inputStyle, ButtonsWrapper, ForgotPassword} from "@/styles/signup"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { withSessionSsr } from "@/lib/withSession.module";
import { NextPage } from 'next'
import { styled, css } from '@stitches/react'
import {Dropdown} from '@/components/shared/dropdown'
import { UpArrow } from "@/assets/upArrow";
import { DropdownMenu } from "@/components/shared/dropdown"
import { DropdownCaret, DropdownContainer } from "@/components/shared/dropdown/styles";
import { atom, useAtom } from "jotai";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { PickCategory } from '@/components/feedback/create/PickCategory'


const Validation = z
  .object({
    title: z.string().min(1).max(32),
    category: z.string(),
    detail: z.string()
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
      title: v4(),
      category: v4(),
      detail: v4()
    });
  }, []);

  const router = useRouter()
  // const onValid = handleSubmit(
  //   // on valid
  //   async (data) => {
  //     const response = await fetch("/api/auth/signup", {
  //       method: "POST",
  //       body: JSON.stringify({ ...data, confirm_password: data.confirm }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })

  //     if (response.ok) {
  //       router.push("/feedback/create")
  //     } 

  //     const result = await response.json()
  //     if (result?.email?._errors)
  //       setError("email", { message: result.email._errors?.[0] });
  //     if (result?.username?._errors)
  //       setError("username", { message: result.username._errors?.[0] });
  //     if (result?.details?._errors)
  //       setError("password", { message: result.password._errors?.[0] });
  //     if (result?.confirm_password?._errors)
  //       setError("confirm", { message: result.confirm_password._errors?.[0] });
  //   }
  // );

  // const BackArrowStyle = css({
  //   padding: '0rem',
  //   margin: '0rem',
  //   width: 'min-content'
  // })
  const SortByContainerCSS = css({
    "$dropdown-space": '42px'
  })

  const onValid = handleSubmit(
    // on valid
    async (data) => {
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        router.push("/feedback")
      } 
      
      const result = await response.json()
      console.log(result)
      if (result?.title?._errors)
        setError("title", { message: result.email._errors?.[0] });

    }
  );
  // const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(items.length)
  
  return (
    
    <div className={Container()}>
      <div className={CreateContainer()}>
        <div className={Section0()}>
          <Button type={'five'} css={{
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            gap: '1rem',
            padding: '0rem'
          }}>
          <BackArrow/>  Go Back
          </Button>
          <Plus className={PlusButton()}/>
        </div>  
        <div className={Section1()}>
          <h1>Create New Feedback</h1>

          <form onSubmit={onValid}>
            <InputLabel>Feedback Title</InputLabel>
            <h4>Add a short, descriptive headline</h4>
            <Input
              id={ids.title}
              isError={!!errors.title}
              errorMessage={errors.title?.message ?? ""}
              type={"text"}
              css={inputStyle}
              register={register("title")}
            />
            <InputLabel>Category</InputLabel>
            <h4>Choose a category for your feedback</h4>
            {/* <Dropdown items={['Feature', 'UI', 'UX', 'Enhancement', 'Bug']} /> */}
            <DropdownContainer className={SortByContainerCSS()}>
            <PickCategory />
            </DropdownContainer>
          </form>
        </div>
      </div>
    </div>
  )
}

// export const getServerSideProps = withSessionSsr(({ req }) => {
//   if (req.session.user) {
//     return {
//       redirect: {
//         permanent: true,
//         destination: '/feedback/create'
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// })

export default Page