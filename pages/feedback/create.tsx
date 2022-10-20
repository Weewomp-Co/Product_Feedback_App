import React from "react";
import Button from "@/components/shared/buttons/index";
import {
  Container,
  Section0,
  PlusButton,
  Section1,
  CreateContainer,
  subTitle,
  Title,
  MainTitle,
  ButtonsWrapper,
  FormStyle,
} from "@/styles/create";
import { BackArrow } from "@/assets/backArrow";
import { Plus } from "@/assets/Plus";
import Input from "@/components/shared/input/Input";
import { InputLabel } from "@/styles/signup";
import { inputStyle } from "@/styles/signup";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Dropdown } from "@/components/shared/dropdown";
import { atom, useAtom } from "jotai";

const items = ["Suggestion", "Planned", "In-Progress", "Live"];
type Items = typeof items[number];
const sortBySelected = atom<Items>(items[0]);

const Validation = z
  .object({
    title: z.string().min(1, "Can't be empty").max(32, "Title too long"),
    category: z.string(),
    details: z.string().min(1, "Can't be empty"),
  })
  .required();

const Page: NextPage = () => {
  const [selectedValue] = useAtom(sortBySelected);

  const resolver = zodResolver(Validation);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<z.infer<typeof Validation>>({
    resolver,
  });

  const [ids, setIds] = useState<Partial<z.infer<typeof Validation>>>({});
  useEffect(() => {
    setIds({
      title: v4(),
      category: v4(),
      details: v4(),
    });
  }, []);

  const logValue = (value: string) => {
    console.log(value);
  };

  const router = useRouter();

  const onValid = handleSubmit(
    // on valid
    async (data) => {
      console.log(data);
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/feedback");
      }

      const result = await response.json();
      if (result?.title?._errors)
        setError("title", { message: result.title._errors?.[0] });
      if (result?.details?._errors)
        setError("details", { message: result.details._errors?.[0] });
      if (result?.category?._errors)
        setError("category", { message: result.category._errors?.[0] });
    }
  );

  return (
    <div className={Container()}>
      <div className={CreateContainer()}>
        <div className={Section0()}>
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
          <Plus className={PlusButton()} />
        </div>
        <div className={Section1()}>
          <h2 className={MainTitle()}>Create New Feedback</h2>

          <form
            onSubmit={(data) => {
              setValue("category", selectedValue);
              onValid(data);
            }}
            className={FormStyle()}
          >
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
              register={register("title", {
                minLength: 1,
              })}
            />

            <div>
              <InputLabel className={Title()}>Category</InputLabel>
              <p className={subTitle()}>Choose a category for your feedback</p>
            </div>
            <Dropdown
              items={items}
              selected={sortBySelected}
              getKey={(value) => value as string}
            />

            <div>
              <InputLabel className={Title()}>Feedback Detail</InputLabel>
              <p className={subTitle()}>
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </div>

            <div>
              <Input
                as={"textarea"}
                id={ids.title}
                isError={!!errors.title}
                errorMessage={errors.details?.message ?? ""}
                type={"text"}
                css={{
                  minWidth: "100%",
                  maxWidth: "100%",
                }}
                register={register("details", {
                  minLength: 1,
                })}
              />
            </div>

            <div className={ButtonsWrapper()}>
              <Button
                color={"five"}
                css={{
                  backgroundColor: "$grey600",
                  color: "white",
                  width: "100%",
                  "@md": {
                    width: "unset",
                  },
                }}
                onClick={() => {
                  router.back();
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color={"one"}
                css={{
                  color: "white",
                  width: "100%",
                  "@md": {
                    width: "unset",
                  },
                }}
              >
                Add Feedback
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
