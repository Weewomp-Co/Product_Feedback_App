import { CSS } from "@stitches/react";
import { styled, config } from "stitches.config";

export const CommentFormContainer = styled('form', {
  width: '100%',
  borderRadius: '10px',
  background: 'white',
  padding: '24px',
  "@xs": {
    padding: '2rem',
    paddingTop: '24px',
  }
})

export const CommentFormHeading = styled('h2', {
  margin: '0',
  fontFamily: '$jost',
  fontSize: '$h3',
  letterSpacing: '$h3',
  color: '$grey600',
  marginBottom: '24px',
})


export const CommentFormInput: CSS<typeof config> = {
  width: '100%',
  minHeight: '80px',
  resize: 'vertical',
  marginBottom: '1rem'
}

export const CommentFormBottomContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  'p': {
    fontFamily: '$jost',
    color: '$grey300',
    fontSize: '$body2'
  }
})

