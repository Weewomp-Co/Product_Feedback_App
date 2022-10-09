import type { NextPage } from "next";
import AuthContainer from "@/components/shared/layouts/AuthContainer";

const Page: NextPage = () => {
  return (
    <div>
      <AuthContainer title="Login"></AuthContainer>
    </div>
  );
};

export default Page;