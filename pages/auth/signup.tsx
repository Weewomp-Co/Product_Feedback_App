import type { NextPage } from "next";
import AuthContainer from "@/components/shared/layouts/AuthContainer"

const Page: NextPage = () => {
  return (
    <AuthContainer title="Sign up" href="/auth/signin">
      <h1>Hello world</h1>
    </AuthContainer>
  );
};

export default Page;
