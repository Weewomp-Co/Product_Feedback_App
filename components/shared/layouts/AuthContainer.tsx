import { AuthContainerStyle, TitleSection } from "./AuthContainerStyle";
import { css, styled } from "../../../stitches.config";
import Button from "@/components/shared/buttons";
import { BackArrow } from "@/assets/backArrow";

const Title = css({
  marginTop: "auto",
});

const Container = styled('div', {
  width: '100%',
  maxWidth: "30.9375rem",
  minHeight: "33.4375rem",
});

const TopContainer = css({
  display: "grid",
  placeContent: 'center',
  gridTemplateColumns: 'max-content minmax(0, 30.937rem)',
  alignItems: 'start',
  gap: "4.375em",
  flexDirection: "row",
  width: "100vw",
  minHeight: "100vh",
  background: '$white300',
  padding: '0 2rem'
});

const BackButton = css({
  padding: '1rem 0',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  minWidth: "163px",
});

type AuthContainerProp = React.PropsWithChildren<{
  title: string;
  href: string;
}>;

const AuthContainer: React.FC<AuthContainerProp> = ({ title, href, children }) => {
  return (
    <main className={TopContainer()}>
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
    </main>
  );
};

export default AuthContainer;
