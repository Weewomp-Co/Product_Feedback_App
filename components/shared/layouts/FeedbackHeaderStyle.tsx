import { styled, css } from "stitches.config";

export const FeedbackHeaderStyle = styled('div', {
  width: 'min-content',
  minWidth: '15.938rem',
  background: 'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)',
  minHeight: '8.563rem',
  color: 'white',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  padding: '1.5rem',
  fontSize: '$h1',
  flexDirection: 'column',
  borderRadius: '0.625rem',
  fontFamily: 'jost'
})

export const TitleStyle = css('div', {
  fontSize: '$h2',
  marginTop: 'auto',
  fontWeight: '$bold'
})

export const SubTitleStyle = css('div', {
  fontSize: '$body2',
  margin: 'initial',
  fontWeight: '500',
  color: '#dbdafc'
})