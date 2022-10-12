import { styled, css } from "stitches.config";

export const Title = css({
  color: '$grey600',
  fontSize: '$h3',
  fontWeight: '$bold'
})

export const LinkStyle = css({
  color: '#8397F8',
  textDecoration: 'underline'
})

export const Value = css({
  color: '$grey300',
  fontWeight: '$bold',
  fontSize: '$body1',
  marginLeft: 'auto'
})

export const itemWrapper = css({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1rem',
  height: '2rem',
  width: '100%'
})

export const MainSection = css({
  display: 'flex',
  flexDirection: 'column',
  height: '1rem',
  justifyContent: 'start',
  alignItems: 'start',
  marginTop: '.75rem'
})

export const MarkerSection = css({
  display: 'flex',
  flexDirection: "column",
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const MarkerPlanned = css({
  backgroundColor: '#F49F85',
  padding: '.25em',
  borderRadius: '50%'
})

export const MarkerInProgress = css({
  backgroundColor: '#AD1FEA',
  padding: '.25em',
  borderRadius: '50%'
})

export const MarkerLive = css({
  backgroundColor: '#62BCFA',
  padding: '.25em',
  borderRadius: '50%'
})

export const RoadmapContainer = styled('div', {
  width: '100%',
  maxWidth: '15.938rem',
  minHeight: '11.125rem',
  backgroundColor: 'white',
  borderRadius: '0.625rem',
  padding: '1.5rem',
  fontFamily: 'jost',
  height: '11.125rem'
})

export const TitleSection = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
})

export const itemText = css({
  color: '$grey300',
  fontSize: '$body1'
})

