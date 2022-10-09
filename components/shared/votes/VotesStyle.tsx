import { styled } from '../../../stiches.config';

export const VotesStyledInactive = styled('div', {
  backgroundColor: '#f2f4fe',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'jost',
  fontSize: "$body3",
  fontWeight: 'bold',
  minWidth: "3.1em",
  width: 'fit-content',
  height: "4em",
  borderRadius: "10px",
  userSelect: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#CFD7FF'
  },
  transition: 'all 120ms ease-out',
  paddingTop: '0.71875em',
  paddingBottom: '0.5em',
  paddingRight: '0.6875em',
  paddingLeft: '0.6875em',
})

export const VotesStyledActive = styled('div', {
  backgroundColor: '$grey900',
  display: 'flex',
  color: 'white',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'jost',
  fontSize: "$body3",
  fontWeight: 'bold',
  minWidth: "3.1em",
  width: 'fit-content',
  height: "4em",
  borderRadius: "10px",
  userSelect: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#CFD7FF'
  },
  transition: 'all 120ms ease-out',
  paddingTop: '0.71875em',
  paddingBottom: '0.5em',
  paddingRight: '0.6875em',
  paddingLeft: '0.6875em',
})

export const VotesStyledWrapper = styled('div', {
  height: "2.4em",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  lineHeight: '9px'
})