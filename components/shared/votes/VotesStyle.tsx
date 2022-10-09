import { styled } from '../../../stitches.config';

export const VotesButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: ".5rem",
  fontFamily: "$jost",
  fontSize: "$body3",
  fontWeight: "$bold",
  padding: "0.875rem 0.6875rem .5rem 0.6875rem",
  borderRadius: '10px',
  outline: 'none',
  border: 'none',
  minWidth: 'calc(3ch + 22px)',
  background: '#F2F4FE',
  color: 'Black',
  "&:hover, &:focus": {
    background: '#CFD7FF',
    border: 'none',
    outline: 'none',
  },
  variants: {
    active: {
      true: {
        background: '$grey900',
        color: '$white900',
        "&:hover, &:focus": {
          background: '$grey900',
        }
      }
    }
  }
})
