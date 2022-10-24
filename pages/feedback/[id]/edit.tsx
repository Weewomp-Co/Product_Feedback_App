import React from 'react'
import Button from '@/components/shared/buttons/index'
import {
  Container,
  NavContainer,
  PlusButton,
  Section,
  CreateContainer,
  subTitle,
  MainTitle,
  FormStyle,
  ButtonsWrapper
} from "@/styles/edit";
import { BackArrow } from '@/assets/backArrow'
import {PenIcon}  from '@/assets/PenIcon'
import Input from '@/components/shared/input/Input'
import { InputLabel } from '@/styles/signup'
import { inputStyle } from "@/styles/signup"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { withSessionSsr } from "@/lib/withSession.module";
import { NextPage } from 'next'
import {Dropdown} from '@/components/shared/dropdown'
import { atom, useAtom } from "jotai";
import { client } from '@/prisma/client'
import { useQuery } from '@tanstack/react-query'
import { GetFeedbackPost } from '@/lib/feedback.module'
import { ErrorMessage } from '@/components/shared/input/InputStyle';
import { userAtom } from '@/lib/stores';

const Validation = z
  .object({
    title: z.string().min(1).max(32),
    details: z.string().min(1),
    category: z.string().optional(),
		status: z.string().optional()
  })

type PageProps = {
	id: string
}

const items = ["Suggestion", "Planned", "In-Progress", "Live"]
const categoryItems = ["UI", "UX", "Enchancement", "Bug", "Feature"]
type Items = (typeof items)[number]
const selectedAtom = atom<Items>(items[0])
const categorySelectedAtom = atom<Items>(categoryItems[0])

const Page: NextPage<PageProps> = ({ id }) => {
  const [user] = useAtom(userAtom)
  const [selected, setSelected] = useAtom(selectedAtom)
  const [categorySelected, setCategorySelected] = useAtom(categorySelectedAtom)
  const resolver = zodResolver(Validation);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    getValues,
    getFieldState
  } = useForm<z.infer<typeof Validation>>({
    resolver,
  });

  const [ids, setIds] = useState<Partial<z.infer<typeof Validation>>>({});
  useEffect(() => {
    setIds({
      title: v4(),
      details: v4(),
      category: v4(),
			status: v4()
    });
  }, []);

  const post = useQuery<GetFeedbackPost>(["feedbackPost", id], async () => {
    const response = await fetch(`/api/feedback/${id}`).then((res) =>
      res.json()
    );
    

    if (post?.data){
      setSelected(post?.data?.status as string)
      setCategorySelected(post?.data?.category as string)
    }

    if (post?.data?.title) {setValue('title', post?.data?.title)}
    if (post?.data?.details) {setValue('details', post?.data?.details)}
    if (post?.data?.category) {setValue('category', post?.data?.category)}
    if (post?.data?.status) {setValue('status', post?.data?.status)}
    if (response._errors) router.push("/feedback");
    return response;
  });
  const logValue = (value: string) => {
    console.log(value)
  }
  const router = useRouter()
  const onValid = handleSubmit(
    async (data) => {
      const response = await fetch(`/api/feedback/${id}`, {
        method: "PUT",
        body: JSON.stringify({ ...data, category: categorySelected, status: selected }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        
        router.push("/feedback")
      } 
      const result = await response.json()
      if (result?.title?._errors)
        setError("title", { message: result.title._errors?.[0] });
      if (result?.details?._errors)
        setError("details", { message: result.details._errors?.[0] });
    }
  );

  const DeleteHandler = async (id: string) => {
    const del = await fetch(`/api/feedback/${id}`, {
      method: 'DELETE'
    })

    if (del.ok){
      router.push('/feedback')
    }
    console.log(del)
  }

  return (
    <main className={Container()}>
      <section className={CreateContainer()}>
        <nav className={NavContainer()}>
          <Button
            color={"five"}
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              padding: "0rem",
            }}
            onClick={() => {
              router.back();
            }}
          >
            <BackArrow />
            Go Back
          </Button>
          <PenIcon className={PlusButton()} />
        </nav>

        <div className={Section()}>
          <h2 className={MainTitle()}>Editing ‘{post?.data?.title}’</h2>

          <form onSubmit={onValid} className={FormStyle()}>
            <div>
              <InputLabel>Feedback Title</InputLabel>
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
              <InputLabel>Category</InputLabel>
              <p className={subTitle()}>Choose a category for your feedback</p>
            </div>

            <div>
              <Dropdown items={categoryItems} selected={categorySelectedAtom} />
              {!!errors.category && <ErrorMessage>{errors.category?.message}</ErrorMessage>}
            </div>

            {(user.role === "ADMIN") ? (
            <div>
              <InputLabel>Update Status</InputLabel>
              <p className={subTitle()}>Change feature state</p>
            </div>) : (<></>)
            }

            {(user.role === "ADMIN") ?
            (<div>
              <Dropdown items={items} selected={selectedAtom} />
              {!!errors.status && <ErrorMessage>{errors.status?.message}</ErrorMessage>}
            </div>) : (<></>)
            }

            <div>
              <InputLabel>Feedback Detail</InputLabel>
              <p className={subTitle()}>
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </div>

            <div>
              <Input
                as={"textarea"}
                id={ids.title}
                isError={!!errors.details}
                errorMessage={errors.details?.message ?? ""}
                type={"text"}
                css={{
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "96px",
                }}
                register={register("details")}
              />
            </div>

            <div className={ButtonsWrapper()}>
              <Button
                color={"four"}
                css={{
                  width: '100%',
                '@md': {
                  width:'unset'
                }
                }}
                type="button"
                onClick={() => {
                  DeleteHandler(id);
                }}
              >
                Delete
              </Button>
              
              <Button color={"three"} css={{
                marginLeft: '0',
                width: '100%',
                '@md': {
                  marginLeft: 'auto',
                  width:'unset'
                }
              }} type={"button"}>
                Cancel
              </Button>
              <Button
                color={"one"}
                css={{
                  width: '100%',
                '@md': {
                  width:'unset'
                }
                }}
                type={"submit"}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export const getServerSideProps = withSessionSsr(async ({ req, params }) => {
  if (!req.session.user) {
    return {
      redirect: {
        permanent: true,
        destination: '/auth/signin'
      }
    }
  }
	
	const post = await client?.feedback.findFirst({
		where: {
			id: params?.id as string
		}
	})

	if (post?.userId !== req.session.user.id || post === undefined){
		return {
			redirect: {
				permanent: true,
				destination: '/feedback'
			}
		}
	}

  return {
    props: {id: params?.id as string}
  }
})

export default Page