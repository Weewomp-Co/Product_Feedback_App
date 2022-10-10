import { AuthContainerStyle, TitleSection } from "./AuthContainerStyle";
import { css, styled } from "../../../stitches.config";
import Button from "@/components/shared/buttons";
import { BackArrow } from "@/assets/backArrow";

const Title = css({
  marginTop: "auto",
});

const Container = styled("div", {
  width: "100%",
  maxWidth: "30.9375rem",
  minHeight: "33.4375rem",
});

const TopContainer = css({
  display: "grid",
  placeContent: "center",
  gap: "4.375em",
  width: "100vw",
  minHeight: "100vh",
  background: "$white300",
  padding: "1rem 2rem",
});

const BackButton = css({
  padding: "1rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  minWidth: "163px",
  order: '1',
  justifySelf: 'end',
  "@md": {
    order: '0'
  }
});

type AuthContainerProp = React.PropsWithChildren<{
  title: string;
  href: string;
}>;

const InnerSection = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 495px)',
  gridTemplateRows: 'max-content, 1fr',
  gap: '1rem',
  alignItems: 'start',
  "@md": {
    gridTemplateRows: 'unset',
    gridTemplateColumns: 'max-content minmax(0, 495px)',
  }
})

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
