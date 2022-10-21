import { styled, css } from "../../../stitches.config";
import buttons from "../buttons";

export const AuthContainerStyle = styled('div', {
  minHeight: '23.4375rem',
  width: '100%',
  padding: '1.5rem',
  borderRadius: '0px 0px 10px 10px',
  backgroundColor: 'white',
  fontFamily: '$jost',
})

export const TitleSection = styled('div', {
  background: 'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)',
  height: '9.9475rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignContent: 'center',
  color: 'white',
  fontFamily: '$jost',
  fontSize: '$h2',
  lineHeight: '$h2',
  letterSpacing: '$h2',
  borderRadius: '10px 10px 0px 0px',
  padding: '1.5rem'
})

export const Title = css({
  marginTop: "auto",
});

export const Container = styled("div", {
  width: "100%",
  maxWidth: "30.9375rem",
  minHeight: "33.4375rem",
});

export const TopContainer = css({
  display: "grid",
  placeContent: "center",
  gap: "4.375em",
  width: "100vw",
  minHeight: "100vh",
  background: "$white300",
  padding: "1rem 2rem",
});

export const BackButton = styled(buttons, {
  padding: "1rem 40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  order: '1',
  justifySelf: 'end',
  "@md": {
    order: '0'
  }
});

export const InnerSection = styled('section', {
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
