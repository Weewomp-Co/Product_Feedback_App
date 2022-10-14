import { css } from "stitches.config";

export const Container = css({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 689px)',
  justifyContent: 'center',
  gap: '30px',
  width: "100vw",
  minHeight: '100vh',
  background: "$white300",
  padding: "3rem",
  "@md": {
    gridTemplateColumns: '255px minmax(0, 825px)',
  }
})

export const InnerLeftContainer = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '24px',
  "@md": {
    display: 'flex',
    flexDirection: 'column',
  }
})

export const InnerRightContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '42px'
})

export const FeedbackProfileLeftContainer = css({
  display: 'none',
  "@md": {
    display: 'inline'
  }
})

export const FeedbackProfileRightContainer = css({
  display: 'inline',
  // alignSelf: 'end',
  marginBottom: '-20px',
  "@md": {
    display: 'none'
  }
})
