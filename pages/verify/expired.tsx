import { VerifyLayout } from "@/components/verify/layout"
import VerifyExpired from "@/assets/verify_expired.svg"
import Image from "next/image"
import { Heading, InnerContainer, SubHeading } from "@/styles/verify"

const Page: React.FC = () => {
  return <VerifyLayout className={InnerContainer()}>
    <Image width="50" height="50" src={VerifyExpired} alt="Email Sent" />

    <Heading>Verifcation Email Link Expired</Heading>
    <SubHeading>
      But not to worry! We still got your details in our system if you would like click
      Resend button and we will get a new verifcation link to you right away.
    </SubHeading>
  </VerifyLayout>
}

export default Page
