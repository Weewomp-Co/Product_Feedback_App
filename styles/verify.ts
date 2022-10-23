import buttons from "@/components/shared/buttons";
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

export const VerifyButton = styled(buttons, {
  justifySelf: 'end',
  marginTop: '2rem'
})
