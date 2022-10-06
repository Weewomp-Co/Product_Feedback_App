import { styled } from "../../../stiches.config";

export const InputStyle = styled('input', {
	padding: '5px 10px',
	fontFamily: '$jost', 
	fontSize: '$body2',
  backgroundColor: "#F7F8FD",
  border: "none",
  maxWidth: "16em",
  maxHeight: "3em",
  minHeight: "2.9725em",
  minWidth: "15.925em",
  borderRadius: "0.3125em",
  color: "$grey600",
  '&:focus': {
    outline: "none",
    border: "1px solid #4661E6"
  }
})

export const InputErrorStyle = styled('input', {
	padding: '5px 10px',
	fontFamily: '$jost', 
	fontSize: '$body2',
  backgroundColor: "#F7F8FD",
  border: "1px solid #D73737",
  maxWidth: "16em",
  maxHeight: "3em",
  minHeight: "2.9725em",
  minWidth: "15.925em",
  borderRadius: "0.3125em",
  color: "$grey600",
  '&:focus': {
    outline: "none"
  }
})