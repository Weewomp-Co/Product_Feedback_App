import { styled } from "@stitches/react";

export const VotesStyledInactive = styled('div', {
  // padding: "2em",
  backgroundColor: '#f2f4fe',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'jost',
  fontSize: "$body3",
  fontWeight: 'bold',
  maxWidth: "2.5em",
  maxHeight: "3.3125em",
  width: '2.5em',
  height: '3.3125em',
  // overflow: "hidden",
  borderRadius: "0.625em",
  userSelect: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#CFD7FF'
  },
  transition: 'all 120ms ease-out'
})

//'#4661E6'

export const VotesStyledActive = styled('div', {
  // padding: "2em",
  backgroundColor: '#4661E6',
  display: 'flex',
  color: 'white',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'jost',
  fontSize: "$body3",
  fontWeight: 'bold',
  maxWidth: "2.5em",
  maxHeight: "3.3125em",
  width: '2.5em',
  height: '3.3125em',
  // overflow: "hidden",
  borderRadius: "0.625em",
  userSelect: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#CFD7FF'
  },
  transition: 'all 120ms ease-out'
})
