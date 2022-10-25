import { styled } from "stitches.config";

export const Main = styled('main', {
  width: '100vw',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 500px)',
  justifyContent: 'center',
  alignItems: 'start',
  background: '$white300',
  padding: '4rem 2rem'
})

export const Container = styled('section', {
  width: '100%',
  padding: '2rem',
  borderRadius: '10px',
  background: 'white',
  "@xs": {
    placeSelf: 'center',
  }
})
