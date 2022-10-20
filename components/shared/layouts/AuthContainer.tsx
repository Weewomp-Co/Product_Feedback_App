import { AuthContainerStyle, TitleSection, Title, Container, TopContainer, BackButton, InnerSection  } from "./AuthContainerStyle";
import { BackArrow } from "@/assets/backArrow";
import Link from "next/link";

type AuthContainerProp = React.PropsWithChildren<{
  title: string;
  href: string;
  className?: string; 
}>


const AuthContainer: React.FC<AuthContainerProp> = ({
  title,
  href,
  children,
  className=""
}) => {
  return (
    <main className={TopContainer()}>
      <InnerSection>
        <Link href={href}>
          <BackButton as="a" color="three">
            <BackArrow /> Go Back
          </BackButton>
        </Link>
        <Container className={className}>
          <TitleSection>
            <h2 className={Title()}>{title}</h2>
          </TitleSection>

          <AuthContainerStyle>
            {children}
          </AuthContainerStyle>
        </Container>
      </InnerSection>
    </main>
  );
};

export default AuthContainer;
