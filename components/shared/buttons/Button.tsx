import { styled } from '../../../stitches.config'

const Button1 = styled('button', {
	padding: ".75em 3.125em",
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
		backgroundColor: '#C75AF6'
	},
})

const Button2 = styled('button', {
	padding: ".75em 3.125em",
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
		backgroundColor: '#7C91F9'
	},
})

const Button3 = styled('button', {
	padding: ".75em 3.125em",
	fontFamily: '$jost', 
	fontSize: '$h4',
	backgroundColor: '$grey600',
	color: "$white300",
	fontWeight: '$bold',
	border: 'none',
	borderRadius: '10px',
	transition: "all 120ms ease-out",
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '#656EA3'
	},
})

const Button4 = styled('button', {
	padding: ".75em 3.125em",
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
		backgroundColor: '#E98888',
	},
})

const Button5 = styled('button', {
	padding: ".75em 3.125em",
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
	},
})

export {Button1, Button2, Button3, Button4, Button5 }
