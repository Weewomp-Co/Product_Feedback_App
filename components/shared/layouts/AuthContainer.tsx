import {
  AuthContainerStyle,
  TitleSection,
  Title,
  Container,
  TopContainer,
  BackButton,
  InnerSection,
} from "./AuthContainerStyle";
import { BackArrow } from "@/assets/backArrow";
import Link from "next/link";
import { useRouter } from "next/router";

type AuthContainerProp = React.PropsWithChildren<{
  title: string;
  href?: string;
  className?: string;
}>;

const AuthContainer: React.FC<AuthContainerProp> = ({
  title,
  href,
  children,
  className = "",
}) => {
  const router = useRouter()
  const onGoBack = () => {
    router.back()
  }
  return (
    <main className={TopContainer()}>
      <InnerSection>
        {href ? (
          <Link href={href}>
            <BackButton as="a" color="three">
              <BackArrow /> Go Back
            </BackButton>
          </Link>
        ) : (
          <BackButton onClick={onGoBack} color="three">
            <BackArrow /> Go Back
          </BackButton>
        )}
        <Container className={className}>
          <TitleSection>
            <h2 className={Title()}>{title}</h2>
          </TitleSection>

          <AuthContainerStyle>{children}</AuthContainerStyle>
        </Container>
      </InnerSection>
    </main>
  );
};

export default AuthContainer;
