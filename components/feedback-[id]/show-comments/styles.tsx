import { styled } from "stitches.config";

export const ShowCommentsContainer = styled("div", {
  width: "100%",
  borderRadius: "10px",
  background: "white",
  padding: "1.5rem",
  paddingTop: "24px",
  h2: {
    fontFamily: "$jost",
    fontSize: "$h3",
    letterSpacing: "$h3",
    color: "$grey600",
    margin: "0",
    marginBottom: "28px",
  },
  "@xs": {
    padding: "2rem",
  }
});

export const CommentContainer = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns:
    "repeat(3, max-content) minmax(0, 1fr) minmax(0, max-content)",
  columnGap: "1rem",
  rowGap: "17px",
  wordBreak: "break-all",
  whiteSpace: "pre-line",
  paddingBottom: "2rem",
  marginBottom: "2rem",
  fontFamily: '$jost',
  '&:not(.subcomment):nth-of-type(1)': {
    marginTop: '0'
  },
  '&:not(.subcomment)': {
    borderBottom: '1px solid #8C92B319',
  },
  '&:not(.subcomment):nth-last-of-type(1), &:last-child': {
    paddingBottom: '0',
    borderBottom: 'none',
    marginBottom: 0
  },
  '&.subcomment': {
    paddingBottom: '0',
    borderBottom: 'none',
    marginBottom: '1rem'
  },

  '.comment-hr': {
    gridColumn: '1 / 2',
    gridRow: '3 / 4',
    background: '#6471960A',
    width: '2px',
    justifySelf: 'center',
    height: 'calc(100% - var(--retract-height, 0px))',
    transition: 'height 150ms ease-in-out',
    marginRight: '.5rem',
    '@xs': {
      marginRight: '0',
      gridRow: '2 / 4',
    }
  },

  '.comment-user-details': {
    gridColumn: '3 / 4',
    gridRow: '1 / 2',
    "@xs": {
      gridColumn: '2 / 3',
    }
  },

  span: {
    borderRadius: "50%",
    alignSelf: "start",
    gridColumn: '1 / 3',
    gridRow: '1 / 2',
    '@xs': {
      gridColumn: '1 / 2'
    }
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
    gridColumn: "1 / -1",
    gridRow: "2 / 3",
    margin: "0",
    fontSize: '$body2',
    color: '$grey300',
    'span': {
      color: '$purple',
      fontWeight: '$semibold'
    },
    '@xs': {
      gridColumn: "2 / 4",
    }
  },
  ".comment-controls": {
    gridColumn: '4 / 6',
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
      },
    }
  },

  '.comment-reply-container': {
    gridColumn: '2 / 6',
    gridRow: '3 / 4',
    display: 'flex',
    flexDirection: 'column',
    '@xs': {
      marginLeft: '-1rem'
    }
  },
  '&.subcomment .comment-reply-container': {
    gridColumnStart: '1',
    '@xs': {
      gridColumnStart: '2'
    },
  },
  '.comment-replies': {
    paddingTop: '1rem',
  },
  '.comment-reply-control': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr max-content',
    gap: '.5rem',
    'button': {
      alignSelf: 'start'
    },
    '@xs': {
      gridTemplateColumns: '1fr max-content',
      gap: '1rem',
    }
  },
  '@xs': {
    gridTemplateColumns: "repeat(2, max-content) minmax(0, 1fr) minmax(0, max-content)",
    columnGap: '2rem',
    rowGap: '17px'
  }
});
