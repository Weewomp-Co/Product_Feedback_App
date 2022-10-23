import { VerifyLayout } from "@/components/verify/layout"
import VerifyFailed from "@/assets/verify_failed.svg"
import Image from "next/image"
import { Heading, InnerContainer, SubHeading } from "@/styles/verify"

const Page: React.FC = () => {
  return <VerifyLayout className={InnerContainer()}>
    <Image width="50" height="50" src={VerifyFailed} alt="Email Sent" />

    <Heading>Verifcation Email Link Failed</Heading>
    <SubHeading>
      Aw oh, This can only happen to two scenarios you took to long to verify the account and we deleted it off our system
      or confirmation url (the link you clicked) has mistake in it.
    </SubHeading>
  </VerifyLayout>
}

export default Page
