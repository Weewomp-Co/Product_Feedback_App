import buttons from "@/components/shared/buttons";
import { styled } from "stitches.config";

export const NoPostContainer = styled("div", {
  width: "100%",
  height: "460px",
  display: "grid",
  placeContent: "center",
  background: "white",
  borderRadius: "10px",
  "@xs": {
    height: '600px'
  }
});

export const NoPostInnerContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const NoPostHeading = styled("h2", {
  fontFamily: "$jost",
  fontSize: "$h1",
  fontWeight: "$bold",
  letterSpacing: "$h1",
  margin: "0",
  textAlign: "center",
  color: "$grey600",
  marginTop: "39px",
  "@xs": {
    marginTop: "53px",
  },
});

export const NoPostSubTitle = styled("p", {
  fontFamily: "$jost",
  fontSize: "$body1",
  maxWidth: "278px",
  width: "100%",
  color: "$grey300",
  textAlign: "center",
  marginTop: "14px",
  "@xs": {
    marginTop: "16px",
    maxWidth: "410px",
  },
});

export const NoPostButton = styled(buttons, {
  padding: ".75rem 24px",
  justifySelf: "center",
  marginTop: "24px",
  "@xs": {
    marginTop: "48px",
  }
});
