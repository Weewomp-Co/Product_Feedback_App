import { styled, css } from "stitches.config";

export const Dot = styled('div',{
  borderRadius: '50%',
  padding: '.25rem',
  margin: '0',
  width: '0rem'
})

export const RoadmapPageCardContainer = styled('div', {
  minHeight: '17rem',
  height: 'min-content',
  maxWidth: '21.875rem',
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  borderRadius: '.3rem',
  padding: '2rem',
  flexDirection: 'column',
  fontFamily: 'jost',
  gap: '1rem',
  position: 'relative',
})

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1rem'
})

export const Type = css({
  color: '$grey300',
})

export const Title = css({
  fontFamily: 'jost',
  fontSize: '$h3',  
  color: '$grey600',
  fontWeight: 'bold',
  marginTop: '.5rem'
})
export const Desc = css({
  fontSize: '$h3',
  color: '$grey300',
  fontWeight: '',
  minHeight: '3.25rem',
  wordBreak: 'break-word',
  margin: '.2rem 0rem'
})

export const Category = styled('div', {
  backgroundColor: '$white600',
  width: 'min-content',
  fontSize: '0.8125rem',
  fontFamily: '$jost',
  padding: '.375rem 1rem',
  borderRadius: '10px',
  border: 'none',
  fontWeight: '$semibold',
  color: '$grey900',
  variants: {
    active: {
      true: {
        background: '$grey900',
        color: 'white'
      }
    }
  }
})

export const LinkStyle = css({
  "&::after": {
    position: "absolute",
    inset: "0",
    content: "",
    display: "block",
  },
  '&:active': {
    color: '$grey900'
  },
  '&:hover': {
    color: '$grey900'
  }
})

export const StyledVotes = {
  flexDirection: 'row',
  margin: '0',
  height: 'min-content',
  zIndex: '5',
  padding: '8px 11px'
}

export const VotesSection = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const CommentsWrapper = css({
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  width: 'min-content',
  gap: '1rem',
  height:'min-content'
})

export const ContentWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 'min-content'
})
