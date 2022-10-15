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
import { atom, useAtom, PrimitiveAtom } from "jotai";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { PickCategory } from '@/components/feedback/create/PickCategory'


const Validation = z
  .object({
    title: z.string().min(1).max(32),
    details: z.string().min(1),
    category: z.string()
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
      details: v4(),
      category: v4()
    });
  }, []);

  const InputWrapper = css({
    	padding: '0.8125em 1.5em 0.8125em 1.5em',
	fontFamily: '$jost', 
	fontSize: '$body2',
  backgroundColor: "$white300",
  border: "none",
  minHeight: "2.9725em",
  borderRadius: "0.3125em",
  color: "$grey600",
  '&:focus': {
    outline: "1px solid $grey900"
  },

  variants : {
    isError: {
      true: {
        border: "1px solid $red"
      },
      
      false: {
        border: "none"
      }
    }
  }
  })

  const items = ["Feature", "UI", "UX", "Enhancement", "Bug"]
  type Items = (typeof items)[number]
  const sortBySelected = atom<Items>(items[0])
  
  const router = useRouter()

  const BackArrowStyle = css({
    padding: '0rem',
    margin: '0rem',
    width: 'min-content'
  })
  const SortByContainerCSS = css({
    "$dropdown-space": '42px'
  })

  const onValid = handleSubmit(
    // on valid
    async (data) => {
      console.log(data)
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify({ ...data, sortBySelected }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        console.log(response)
        router.push("/feedback")
      } 
      
      const result = await response.json()
      if (result?.title?._errors)
        setError("title", { message: result.title._errors?.[0] });
      if (result?.details?._errors)
        setError("details", { message: result.details._errors?.[0] });
    }
  );

  const subTitle = css({
    fontSize: '14px',
    color: '$grey300',
    padding: '0rem',
    margin: '0'
  })

  const Title = css({
    margin: '0rem',
    padding: '0rem'
  })

  const MainTitle = css({
    fontSize: '$h1',
    padding: '0rem',
    margin: '0rem'
  })

  const FormStyle = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  })

  const ButtonsWrapper = css({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
    width: '100%',
    gap: '1rem'
  })
  

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
          }} onClick={() => {
            router.back()
          }}>
          <BackArrow/>  Go Back
          </Button>
          <Plus className={PlusButton()}/>
        </div>  
        <div className={Section1()}>
          <h2 className={MainTitle()}>Create New Feedback</h2>

          <form onSubmit={onValid} className={FormStyle()}>

            <div>
            <InputLabel className={Title()}>Feedback Title</InputLabel>
            <p className={subTitle()}>Add a short, descriptive headline</p>
            </div>

            <Input
              id={ids.title}
              isError={!!errors.title}
              errorMessage={errors.title?.message ?? ""}
              type={"text"}
              css={inputStyle}
              register={register("title")}
            />

            <div>
            <InputLabel className={Title()}>Category</InputLabel>
            <p className={subTitle()}>Choose a category for your feedback</p>
            </div>
            <Dropdown items={items} selected={sortBySelected}/>

            <div>
            <InputLabel className={Title()}>Feedback Detail</InputLabel>
            <p className={subTitle()}>Include any specific comments on what should be improved, added, etc.</p>
            </div>

            <div>
            <Input
            as={"textarea"}
            id={ids.title}
            isError={!!errors.title}
            errorMessage={errors.details?.message ?? ""}
            type={"text"}
            css={{
              minWidth: '100%',
              maxWidth: '100%'
            }}
            register={register("details")}
            />
            </div>

            <div className={ButtonsWrapper()}>
              <Button type={"five"} css={{
                backgroundColor: '$grey600',
                color: 'white'
              }}>Cancel</Button>
              <Button type={"one"}>Add Feedback</Button>
            </div>
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