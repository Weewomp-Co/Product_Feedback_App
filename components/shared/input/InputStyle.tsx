import { styled } from "../../../stitches.config";

export const InputStyle = styled('input', {
	padding: '0.8125em 1.5em 0.8125em 1.5em',
	fontFamily: '$jost', 
	fontSize: '$body2',
  backgroundColor: "$white300",
  border: "none",
  minHeight: "2.9725em",
  borderRadius: "0.3125em",
  color: "$grey600",
  '&:focus': {
    outline: "1px solid $grey900"
  },

  variants : {
    isError: {
      true: {
        border: "1px solid $red"
      },
      
      false: {
        border: "none"
      }
    }
  }
})

export const ErrorMessage = styled('div', {
  fontFamily: '$jost', 
	fontSize: '$body2',
  color: "$red"
})
