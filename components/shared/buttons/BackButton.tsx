import { styled } from "../../../stitches.config";
// import backArrow1 from './backArrow1.svg'
// import backArrow2 from './backArrow2.svg'
// import arrow0 from './arrow0.png'

const BackButton1 = styled('button', {
  width: "9.875em",
	height: "3.3125em",
	fontFamily: '$jost', 
	fontSize: '$h4',
	backgroundColor: 'transparent',
	color: "$grey300",
	fontWeight: '$bold',
	border: 'none',
	borderRadius: '10px',
	transition: "all 120ms ease-out",
	cursor: 'pointer',
	'&:hover': {
		textDecoration: "underline"
	}
})

const BackButton2 = styled('button', {
  width: "9.875em",
	height: "3.3125em",
	fontFamily: '$jost', 
	fontSize: '$h4',
	backgroundColor: '#373F68',
	color: "$white300",
	fontWeight: '$bold',
	border: 'none',
	borderRadius: '10px',
	transition: "all 120ms ease-out",
	cursor: 'pointer',
	'&:hover': {
		textDecoration: "underline"
	}
})





export {BackButton1, BackButton2}