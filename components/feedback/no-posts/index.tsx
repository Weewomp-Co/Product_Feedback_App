import Image from "next/image"
import { NoPostContainer, NoPostHeading, NoPostSubTitle } from "./styles"
import Jeff from "@/assets/jeff.svg"
import Buttons from "@/components/shared/buttons"
import Link from "next/link"

export const NoPosts = () => {
  return <NoPostContainer>
    <Image src={Jeff} alt="" />
    <NoPostHeading>There is no feedback yet.</NoPostHeading>
    <NoPostSubTitle>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</NoPostSubTitle>
    <Link href="/feedback/create">
      <Buttons as="a" type="one" css={{ padding: '.75rem 24px', marginTop: '48px', justifySelf: 'center' }}>+ Add Feedback</Buttons>
    </Link>
  </NoPostContainer>
}
