import { css, styled } from "stitches.config";
import { InputLabel as DefaultInputLabel } from "./signup"

export const Container = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight:'100vh',
  width: '100vw',
  padding: '0rem',
  margin: '0rem',
  alignItems: 'center',
  backgroundColor: '$white300',
  fontFamily: 'jost',
  justifyContent: 'center',
})

export const ButtonsWrapper = css({
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: '1rem',
  '@xs' : {
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'end',
  },
  'button': {
    width: '100%',
    '@xs': {
      width: 'unset'
    }
  },
  marginTop: '1rem'
})

export const FormStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const NavContainer = css({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  width: '100%',
  height:'min-content',
  flexDirection: 'column'
})

export const PlusButton = css({
  transform: 'translateX(1.5rem) translateY(1.75rem)',
  marginTop: '0.916rem'
})

export const Section = css({
  backgroundColor: 'white',
  minHeight: '10rem',
  width: '100%',
  borderRadius: '0.625rem',
  padding: '2.75rem 1.5rem',
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
  padding: '1.5rem'
})

export const subTitle = css({
  fontSize: '14px',
  color: '$grey300',
  padding: '0rem',
  margin: '0'
})

export const MainTitle = css({
  fontSize: '18px',
  padding: '0rem',
  margin: '0rem',
  color: '$grey600',
  '@xs': {
    fontSize: '$h1',
  }
})

export const InputLabel = styled(DefaultInputLabel, {
  margin: 0,
  padding: 0
})
