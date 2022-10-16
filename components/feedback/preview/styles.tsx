import { styled, css } from "stitches.config";

export const FeedbackPreviewContainer = styled("div", {
  display: 'grid',
  gridTemplateColumns: '1fr max-content',
  fontFamily: "jost",
  minHeight: "9.438rem",
  maxWidth: "51.563rem",
  borderRadius: "0.625rem",
  position: "relative",
  background: 'white',
  gap: "1rem",
  padding: '1.5rem',
  "@xs": {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: 'row',
    gap: '0px',
    padding: "2rem",
  }
});

export const title = css({
  fontWeight: "bold",
  color: "$grey600",
  fontSize: "$h3",
  "&::after": {
    position: "absolute",
    inset: "0",
    content: "",
    display: "block",
  },
  "&:hover": {
    color: "$grey900",
  },
});

export const CommentsStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
  marginTop: "auto",
  marginBottom: "auto",
  gap: "1rem",
  fontWeight: "bold",
  marginRight: "0",
  order: 2,
});

export const subtitle = css({
  fontSize: "$body1",
  color: "$grey300",
  margin: "0",
});

export const textWrapper = css({
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  flexDirection: "column",
  gap: "0.75rem",
  gridColumn: '1 / -1',
  "@xs": {
    paddingLeft: "2.5rem",
  }
});

export const VotesStyle = css({
  zIndex: "1",
  order: 1,
  justifySelf: 'start',
  "@xs": {
    order: 'unset',
  }
});

export const tag = css({
  color: "$grey900",
  fontSize: "$body3",
  backgroundColor: "$white600",
  padding: "0.375rem 1rem",
  borderRadius: "0.625rem",
  fontWeight: "$semibold",
  margin: "0",
});
