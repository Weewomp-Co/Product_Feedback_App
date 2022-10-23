import buttons from "@/components/shared/buttons";
import { ErrorMessage } from "@/components/shared/input/InputStyle";
import { css, styled } from "stitches.config";

export const InnerContainer = css({
  display: 'grid',
  gridAutoFlow: 'row',
  alignItems: 'center',
  textAlign: 'center'
})

export const Heading = styled('h2', {
  fontFamily: '$jost',
  fontSize: '$h3',
  letterSpacing: '$h3',
  color: '$grey600',
  margin: 0,
  padding: 0,
  marginTop: '1rem'
})

export const SubHeading = styled('p', {
  fontFamily: '$jost',
  fontSize: '$body1',
  letterSpacing: '$body1',
  color: '$grey300',
  margin: 0,
  padding: 0,
  marginTop: '.5rem',
  maxWidth: '450px',
})

export const ResendContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '2rem',
  flexDirection: 'column-reverse',
  gap: '.5rem',
  "@xs": {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export const VerifyButton = styled(buttons, {
  justifySelf: 'end',
})

export const ResendError = styled(ErrorMessage, {
  justifySelf: 'start',
  textAlign: 'start',
})
