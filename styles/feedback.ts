import { css } from "stitches.config";

export const Container = css({
  display: "grid",
  gridTemplateColumns: "minmax(0, 689px)",
  justifyContent: "center",
  gap: "30px",
  width: "100vw",
  minHeight: "100vh",
  background: "$white300",
  padding: '3rem 24px',
  gridTemplateRows: 'max-content',
  "@xs": {
    gridTemplateRows: '178px max-content',
  },
  "@md": {
    padding: "3rem",
    gridTemplateColumns: "255px minmax(0, 825px)",
    gridTemplateRows: 'initial'
  },
});

export const InnerLeftContainer = css({
  display: "none",
  "@xs": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },
  "@md": {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
});

export const InnerRightContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const FeedbackProfileLeftContainer = css({
  display: "none",
  "@md": {
    display: "inline",
  },
});

export const FeedbackProfileRightContainer = css({
  display: "inline",
  marginBottom: "-4px",
  marginTop: '112px',
  "@xs": {
    marginTop: '0px'
  },
  "@md": {
    display: "none",
  },
});
