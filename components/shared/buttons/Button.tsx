import { styled } from '../../../stitches.config'

const Button1 = styled('button', {
	maxWidth: "12em",
	maxHeight: "2.75em",
	minWidth: "142px",
	minHeight: "38px",
	padding: ".65em 3.025em",
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
	userSelect: 'none',
	wordWrap: "nowrap",
	wordBreak: "keep-all"
})

const Button2 = styled('button', {
	maxWidth: "12em",
	maxHeight: "2.75em",
	minWidth: "142px",
	minHeight: "38px",
	padding: ".65em 3.025em",
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
	userSelect: 'none',
	wordWrap: "nowrap",
	wordBreak: "keep-all"
})

const Button3 = styled('button', {
	maxWidth: "12em",
	maxHeight: "2.75em",
	minWidth: "142px",
	minHeight: "38px",
	padding: ".65em 3.025em",
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
	userSelect: 'none',
	wordWrap: "nowrap",
	wordBreak: "keep-all"
})

const Button4 = styled('button', {
	maxWidth: "12em",
	maxHeight: "2.75em",
	minWidth: "142px",
	minHeight: "38px",
	padding: ".65em 3.025em",
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
		color: "transparent"
	},
	userSelect: 'none',
	wordWrap: "nowrap",
	wordBreak: "keep-all"
})

const Button5 = styled('button', {
  maxWidth: "10em",
	maxHeight: "3.3125em",
	minWidth: "140px",
	minHeight: "3.3125em",
	padding: ".942em 2.65em",
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
	userSelect: 'none',
	wordWrap: "nowrap",
	wordBreak: "keep-all"
})

const Button6 = styled('button', {
	maxWidth: "10em",
	maxHeight: "3.3125em",
	minWidth: "140px",
	minHeight: "3.3125em",
	padding: ".942em 2.65em",
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
	},
	userSelect: 'none',
	wordWrap: "nowrap",
	wordBreak: "keep-all"
})

export {Button1, Button2, Button3, Button4, Button5, Button6}