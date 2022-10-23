import { VerifyLayout } from "@/components/verify/layout"
import VerifyExpired from "@/assets/verify_expired.svg"
import Image from "next/image"
import { Heading, InnerContainer, SubHeading, VerifyButton } from "@/styles/verify"
import { useRouter } from "next/router"

const Page: React.FC = () => {
  const router = useRouter()
  const onResend = async () => {
    const response = await fetch('/api/verify/refresh', {
      method: 'POST',
    })

    if (response.ok) {
      router.push('/verify')
    }
  }

  return <VerifyLayout className={InnerContainer()}>
    <Image width="50" height="50" src={VerifyExpired} alt="Email Sent" />

    <Heading>Verifcation Email Link Expired</Heading>
    <SubHeading>
      But not to worry! We still got your details in our system if you would like click
      Resend button and we will get a new verifcation link to you right away.
    </SubHeading>

    <VerifyButton color="three" onClick={onResend}>
      Resend
    </VerifyButton>
  </VerifyLayout>
}

export default Page
