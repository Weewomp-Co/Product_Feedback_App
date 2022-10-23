import { VerifyLayout } from "@/components/verify/layout";
import VerifyExpired from "@/assets/verify_expired.svg";
import Image from "next/image";
import {
  Heading,
  InnerContainer,
  ResendContainer,
  ResendError,
  SubHeading,
  VerifyButton,
} from "@/styles/verify";
import { useRouter } from "next/router";
import { useState } from "react";

const Page: React.FC = () => {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState<string | undefined>(undefined);
  const onResend = async () => {
    const response = await fetch("/api/verify/refresh", {
      method: "POST",
    });

    if (response.ok) {
      router.push("/verify");
      return;
    }

    const error = await response.json();
    if (error._errors?.[0]) setErrMsg(error._errors?.[0]);
  };

  return (
    <VerifyLayout className={InnerContainer()}>
      <Image width="50" height="50" src={VerifyExpired} alt="Email Sent" />

      <Heading>Verifcation Email Link Expired</Heading>
      <SubHeading>
        But not to worry! We still got your details in our system if you would
        like click Resend button and we will get a new verifcation link to you
        right away.
      </SubHeading>

      <ResendContainer>
        <ResendError>{errMsg}</ResendError>
        <VerifyButton color="three" onClick={onResend}>
          Resend
        </VerifyButton>
      </ResendContainer>
    </VerifyLayout>
  );
};

export default Page;
