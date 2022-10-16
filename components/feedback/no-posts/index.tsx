import Image from "next/image"
import { NoPostButton, NoPostContainer, NoPostHeading, NoPostSubTitle } from "./styles"
import Jeff from "@/assets/jeff.svg"
import Link from "next/link"

export const NoPosts = () => {
  return <NoPostContainer>
    <Image src={Jeff} alt="" />
    <NoPostHeading>There is no feedback yet.</NoPostHeading>
    <NoPostSubTitle>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</NoPostSubTitle>
    <Link href="/feedback/create">
      <NoPostButton href="" as="a" type="one">+ Add Feedback</NoPostButton>
    </Link>
  </NoPostContainer>
}
