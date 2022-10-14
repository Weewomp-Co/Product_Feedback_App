import { styled } from "stitches.config";

export const NoPostContainer = styled('div', {
  width: '100%',
  height: '600px',
  display: 'grid',
  placeContent: 'center',
  background: 'white',
  borderRadius: '10px',
})

export const NoPostInnerContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const NoPostHeading = styled('h2', {
  fontFamily: '$jost',
  fontSize: '$h1',
  fontWeight: '$bold',
  letterSpacing: '$h1',
  margin: '0',
  textAlign: 'center',
  color: '$grey600',
  marginTop: '53px',
})

export const NoPostSubTitle = styled('p', {
  fontFamily: '$jost',
  fontSize: '$body1',
  maxWidth: '410px',
  width: '100%',
  color: '$grey300',
  textAlign: 'center',
  marginTop: '16px',
})
