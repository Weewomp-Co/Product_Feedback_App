import { css, styled } from "stitches.config";

export const MainContainer = styled('main', {
  width: '100%',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 540px)',
  gridTemplateRows: 'max-content 1fr',
  justifyContent: 'center',
  padding: '40px 16px',
  background: '$white300',
  gap: '60px',
  "@xs": {
    gap: '74px',
    padding: '92px 24px 40px 24px',
  }
})

export const GoBackButton = css({
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',
  justifySelf: 'start',
  padding: '0',
})
