import Buttons from "@/components/shared/buttons";
import { css, styled } from "stitches.config";

export const NavBarOuterContainer = styled("div", {
  width: "100%",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "10",
  "@xs": {
    position: "initial",
  },
});

export const NavBarMobileHead = styled("nav", {
  display: "grid",
  gridTemplateColumns: "1fr max-content",
  gridTemplateRows: "repeat(2, max-content)",
  gridAutoFlow: "column",
  width: "100%",
  background:
    "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
  padding: "16px 24px",
  "@xs": {
    display: "none",
  },
});

export const NavBarMobileH2 = css({
  fontFamily: '$jost',
  fontSize: "$body2",
  fontWeight: '$bold',
  margin: "0",
  color: 'white',
});

export const NavBarMobileSubtitle = css({
  fontFamily: '$jost',
  fontSize: '13px',
  fontWeight: '$medium',
  margin: "0",
  color: 'white',
});

export const NavBarMobileBurger = styled("button", {
  background: 'transparent',
  gridRow: '1 / -1',
  border: '0',
  cursor: 'pointer',
  justifySelf: 'center',
  padding: '0',
});

export const NavBarFeedback = styled("nav", {
  width: "100%",
  display: "grid",
  justifyItems: "end",
  alignItems: "center",
  background: "#373F68",
  padding: "8px 24px",
  gridTemplateColumns: "max-content minmax(0, 1fr)",
  "@xs": {
    padding: "14px 16px 14px 24px",
    borderRadius: "10px",
    gap: "1rem",
  },
  "@md": {
    gridTemplateColumns: "repeat(3, max-content) minmax(0, 1fr)",
  },
});

export const NavBarHeading = styled("h2", {
  margin: "0",
  fontFamily: "$jost",
  fontSize: "$h3",
  color: "white",
  display: "none",
  "@md": {
    display: "inline",
  },
});

export const NavBarBulb = css({
  display: "none",
  "@md": {
    display: "block",
  },
});

export const NavBarAsideContainer = styled('div', {
  position: 'absolute',
  top: '73px',
  left: '0',
  width: '100%',
  minHeight: 'calc(100vh - 73px)',
  background: '#00000032',
  display: 'flex',
  justifyContent: 'end',
  "@xs": {
    display: 'none'
  }
}) 

export const NavBarAside = styled('aside', {
  width: '271px',
  minheight: '100%',
  background: '$white300',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  gap: '24px',
})

export const NavBarAddFeedback = styled(Buttons, {
  padding: "0.75rem 1rem",
  '&::before': {
    content: '+'
  },
  "@xs": {
    padding: "0.75rem 24px",
    '&::before': {
      content: '+ Add Feedback',
    },
  },
})
