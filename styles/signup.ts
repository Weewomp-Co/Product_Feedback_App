import { css, styled } from "stitches.config";

export const inputStyle = {
  width: "100%",
};

export const Container = css({
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "#F7F8FD",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const InputLabel = styled("label", {
  color: "$grey600",
  fontSize: "$h4",
  fontWeight: "$bold",
  letterSpacing: "$h4",
  lineHeight: "$h4",
  margin: "24px 0 1rem 0",
  display: "inline-block",
  "&:first-of-type": {
    marginTop: "0px",
  },
});

export const ButtonsWrapper = css({
  marginTop: "3.5em",
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'center',
  "@sm": {
    justifyContent: 'start'
  }
});

export const ForgotPassword = css({
  padding: '1rem',
})
