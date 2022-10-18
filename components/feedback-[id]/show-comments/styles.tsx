import { styled } from "stitches.config";

export const ShowCommentsContainer = styled("div", {
  width: "100%",
  borderRadius: "10px",
  background: "white",
  padding: "2rem",
  paddingTop: "24px",
  h2: {
    fontFamily: "$jost",
    fontSize: "$h3",
    letterSpacing: "$h3",
    color: "$grey600",
    margin: "0",
    marginBottom: "28px",
  },
});

export const CommentContainer = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns:
    "repeat(2, max-content) minmax(0, 1fr) minmax(0, max-content)",
  columnGap: "2rem",
  rowGap: "17px",
  wordBreak: "break-all",
  whiteSpace: "pre-line",
  paddingBottom: "2rem",
  marginBottom: "2rem",
  fontFamily: '$jost',
  borderBottom: '1px solid #8C92B319',
  '&:nth-of-type(1)': {
    marginTop: '0'
  },
  '&:nth-last-of-type(1)': {
    paddingBottom: '0',
    borderBottom: 'none',
  },

  span: {
    borderRadius: "50%",
    alignSelf: "start",
  },

  h3: {
    margin: "0",
    letterSpacing: '$h4',
    fontSize: '$h4',
    color: '$grey600',
    textTransform: 'capitalize',
  },
  "h3 + p": {
    margin: "0",
    color: '$grey300',
    fontSize: '$h4',
  },
  ".comment-content": {
    gridColumn: "2 / 4",
    gridRow: "2 / 3",
    margin: "0",
    fontSize: '$body2',
    color: '$grey300'
  },
  ".comment-controls": {
    alignSelf: "start",
    justifySelf: "end",
    display: 'flex',
    gap: '.5rem',
    justifyContent: 'center',
    'button': {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      display: 'grid',
      placeContent: 'center',
    },
    '.comment-reply': {
      color: '$grey900',
      fontWeight: '$semibold',
      textTransform: 'capitalize',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },

  '.comment-replies, .comment-reply-control': {
    gridColumn: '2 / 5',
    gridRow: '3 / 4',
  }
});
