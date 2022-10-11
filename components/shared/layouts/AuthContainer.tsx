import { AuthContainerStyle, TitleSection, Title, Container, TopContainer, BackButton, InnerSection  } from "./AuthContainerStyle";
import { css, styled } from "../../../stitches.config";
import Button from "@/components/shared/buttons";
import { BackArrow } from "@/assets/backArrow";

type AuthContainerProp = React.PropsWithChildren<{
  title: string;
  href: string;
}>;

const AuthContainer: React.FC<AuthContainerProp> = ({
  title,
  href,
  children,
}) => {
  return (
    <main className={TopContainer()}>
      <InnerSection>
        <Button as="a" href={href} type={"three"} className={BackButton()}>
          <BackArrow /> Go Back
        </Button>
        <Container>
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