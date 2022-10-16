import { styled } from '../../../stitches.config';

export const VotesButton = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: "8px",
  fontFamily: "$jost",
  fontSize: "$body3",
  fontWeight: "$bold",
  padding: '4px 16px',
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
  "@xs": {
    flexDirection: 'column',
    gap: '10px',
    padding: "0.875rem 0.6875rem .5rem 0.6875rem",
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
