import { styled } from '../../../stitches.config'

export default styled('button', {
  padding: ".75em 3.125em",
  fontFamily: '$jost',
  fontSize: '$h4',
  fontWeight: '$bold',
  transition: 'all 120ms ease-out',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '10px',
  color: '$white300',
  variants: {
    type: {
      one: {
        backgroundColor: '$purple',
        "&:hover": {
          backgroundColor: '#C75AF6'
        }
      },
      two: {
        backgroundColor: '$grey900',
        "&:hover": {
          backgroundColor: '#7C91F9'
        }
      },
      three: {
        backgroundColor: '$grey600',
        "&:hover": {
          backgroundColor: '#656EA3'
        }
      },
      four: {
        backgroundColor: '$red',
        "&:hover": {
          backgroundColor: '#E98888'
        }
      },
      five: {
        backgroundColor: 'transparent',
        color: '$grey300',
        "&:hover": {
          textDecoration: 'underline'
        }
      }
    },
  },
  defaultVariants: {
    type: 'one'
  }
});