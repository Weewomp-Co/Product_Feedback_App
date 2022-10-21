import { styled } from "stitches.config";

export const BadgeSearchContainer = styled('div', {
  padding: '24px',
  display: 'flex',
  flexWrap: 'wrap',
  paddingTop: '10px',
  background: 'white',
  borderRadius: '10px',
  overflow: 'hidden auto',
})

export const BadgeSearchCategory = styled('button', {
  marginTop: '14px',
  marginRight: '8px',
  fontSize: '0.8125rem',
  fontFamily: '$jost',
  padding: '.375rem 1rem',
  borderRadius: '10px',
  border: 'none',
  fontWeight: '$semibold',
  color: '$grey900',
  variants: {
    active: {
      true: {
        background: '$grey900',
        color: 'white'
      }
    }
  }
})
