import { css, styled } from "stitches.config";

export const AuthContainerOverides = css({
  display: 'grid',
})

export const SignInStyle = css({
  backgroundColor: 'blue'
})

export const ButtonsWrapper = css({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  '@md': {
    flexDirection: 'row',
  },
  marginTop: '2rem' 

})

export const ErrorText = css({
  fontFamily: '$jost', 
  fontSize: '$body2',
  color: "$red"
})

export const FormStyle = css({
  display: "grid",
  gridTemplateRows: 'repeat(4, max-content) 1fr',
})

export const Container = css({
  height: '100%',
  display: 'grid'
})
