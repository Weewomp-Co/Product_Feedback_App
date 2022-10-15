import { styled, css } from "stitches.config";

export const Container = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight:'100vh',
  width: '100vw',
  padding: '0rem',
  margin: '0rem',
  // justifyContent:'center',
  alignItems: 'center',
  backgroundColor: '$white300',
  fontFamily: 'jost',
  justifyContent: 'start',
})

export const Section0 = css({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  width: '100%',
  height:'min-content',
  flexDirection: 'column'
})

export const PlusButton = css({
  transform: 'translateX(3rem) translateY(1.75rem)',
  marginTop: '2.625rem'
})

export const Section1 = css({
  backgroundColor: 'white',
  minHeight: '10rem',
  width: '100%',
  borderRadius: '0.625rem',
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem'
})

export const CreateContainer = css({
  maxWidth: '39.75rem',
  width: '100%',
  minHeight: '10rem',
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  flexDirection: 'column',
  padding: '3rem'
})