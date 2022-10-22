import { styled, css } from "stitches.config";

export const TitleSection = css({
  
})

export const Container = css({
  maxWidth: '100vw',
  minHeight: '100vh',
  padding: '0rem',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  fontFamily: 'jost',
  backgroundColor: '$white300',
  '@md': {
    padding: '3rem',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const ContentContainer = css({
  display: 'flex',
  maxWidth: '67.5rem',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  gap: '0rem',
  '@md': {
  gap: '3rem'
  }
})

export const navBar = css({
  backgroundColor: '#373F68',
  width: '100%',
  height: '100%',
  borderRadius: '0rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  padding: '2rem',
  flexDirection: 'column',
  gap: '2rem',
  '@xs': {
    borderRadius: '0.625rem',
    flexDirection: 'row',
    gap: '0rem'
  },
})

export const navWrapper = css({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  flexDirection: 'column',
  textAlign: 'center'
})

export const navTitle = css({
  fontSize: '$h1',
  fontWeight: 'bold',
  lineHeight: '$h1',
  margin:'0',
  padding: '0'
})

export const FeedbackSection = css({
  display: 'flex',
  width: '100%',
  minHeight: '40rem',
})

export const DesktopContainer = styled('div', {
  display: 'none',
  '@md': {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    width:'100%',
    gap: '1.5rem'
  }
})

export const MobileContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '@md': {
    display: 'none'
  },
  marginBottom: '3rem'
})

export const MobileButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  fontFamily: 'jost',
  fontSize: '$h3',
  color: '$grey600',
  fontWeight: 'bold',
  height: '4rem',
  borderBottom: '.2rem solid transparent',
  width: '100%',
  opacity: '0.4',
  '@xs': {
    height: 'inherit'
  }
})

export const PlannedSelected = {
  borderBottom: '.2rem solid #F49F85',
  color: 'black',
  opacity: '1'
}

export const ProgressSelected = {
  borderBottom: '.2rem solid #AD1FEA',
  color: 'black',
  opacity: '1'
}

export const LiveSelected = {
  borderBottom: '.2rem solid #62BCFA',
  color: 'black',
  opacity: '1'
}

export const MobileNavWrapper = css({
  display: 'flex',
  width: '100%',
  height: 'unset',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderBottom: '1px solid #8C92B319',
  marginBottom: '1.5rem',
  position: 'relative',
  flexDirection: 'column',
  '@xs': {
    flexDirection: 'row',
    minHeight: '3.75rem',
    height: '3.75rem'
  }
})

export const PostsWrapper = css({
  height: '100%',
  width: '100%',
  padding: '2rem',
  '@xs': {
    padding: '0rem'
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '0rem'
})