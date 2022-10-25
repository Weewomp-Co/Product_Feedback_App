import { VerifyLayout } from "@/components/verify/layout"
import VerifyMail from "@/assets/verify_mail.svg"
import Image from "next/image"
import { Heading, InnerContainer, SubHeading } from "@/styles/verify"

const Page: React.FC = () => {
  return <VerifyLayout className={InnerContainer()}>
    <Image width="50" height="50" src={VerifyMail} alt="Email Sent" />

    <Heading>Verifcation Email Sent</Heading>
    <SubHeading>
      Expiration Date for Verification is 10 Minutes and total time to verify before your account is whipped is 24 hours.
    </SubHeading>
  </VerifyLayout>
}

export default Page
