import { styled } from '../../../stitches.config'

const Button1 = styled('button', {
	width: "9.875em",
	height: "2.75em",
	fontFamily: '$jost', 
	fontSize: '$h4',
	backgroundColor: '$purple',
	color: "$white300",
	fontWeight: '$bold',
	border: 'none',
	borderRadius: '10px',
	transition: "all 120ms ease-out",
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '$button1Hover'
	}
})

const Button2 = styled('button', {
	width: "9.875em",
	height: "2.75em",
	fontFamily: '$jost', 
	fontSize: '$h4',
	backgroundColor: '$blue600',
	color: "$white300",
	fontWeight: '$bold',
	border: 'none',
	borderRadius: '10px',
	transition: "all 120ms ease-out",
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '$button2Hover'
	}
})

const Button3 = styled('button', {
	width: "9.875em",
	height: "2.75em",
	fontFamily: '$jost', 
	fontSize: '$h4',
	backgroundColor: '$blue300',
	color: "$white300",
	fontWeight: '$bold',
	border: 'none',
	borderRadius: '10px',
	transition: "all 120ms ease-out",
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '$button3Hover'
	}
})

const Button4 = styled('button', {
	width: "9.875em",
	height: "2.75em",
	fontFamily: '$jost', 
	fontSize: '$h4',
	backgroundColor: '$red',
	color: "$white300",
	fontWeight: '$bold',
	border: 'none',
	borderRadius: '10px',
	transition: "all 120ms ease-out",
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '$button4Hover',
		color: "transparent"
	}
})

export {Button1, Button2, Button3, Button4}