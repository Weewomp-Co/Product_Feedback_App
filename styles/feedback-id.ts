import { css, styled } from "stitches.config";

export const FeedbackIDMain = styled('main', {
  width: '100vw',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 730px)',
  justifyContent: 'center',
  background: '$white300',
  padding: '0 1.5rem 1.5rem 1.5rem'
}) 

export const FeedbackIDInnerContainer = styled('section', {
  marginTop: '56px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
})

export const TopNavContainer = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const GoBack = css({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  '& svg': {
    color: '$grey900'
  }
})
