import { css, styled } from "stitches.config";

export const NavBarContainer = styled('nav', {
  width: '100%',
  display: 'grid',
  justifyItems: 'end',
  alignItems: 'center',
  gridTemplateColumns: 'minmax(0,max-content) minmax(0, 1fr)',
  padding: '14px 16px 14px 24px',
  background: '#373F68',
  borderRadius: '10px',
  gap: '1rem',
  "@md": {
    gridTemplateColumns: 'repeat(3, minmax(0,max-content)) minmax(0, 1fr)',
  }
})

export const NavBarHeading = styled('h2', {
  margin: '0',
  fontFamily: '$jost',
  fontSize: '$h3',
  color: 'white',
  display: 'none',
  "@md": {
    display: 'inline'
  }
})

export const NavBarBulb = css({
  display: 'none',
  '@md': {
    display: 'block'
  }
})
