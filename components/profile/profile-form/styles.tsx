import { styled } from "stitches.config";

export const ProfileCard = styled('form', {
  padding: '42px 1.5rem',
  borderRadius: '10px',
  background: 'white',
  alignSelf: 'start',
  
  position: 'relative',
  '&::before': {
    content: 'url(/profile-card.svg)',
    position: 'absolute',
    top: 0,
    left: '42px',
    transform: 'translateY(-50%)'
  },
  "@xs": {
    padding: '57px 42px 55px 42px',
  }
})

export const ProfileUsername = styled('h2', {
  fontFamily: '$jost',
  fontSize: '$h1',
  letterSpacing: '$h1',
  color: '$grey600',
  margin: '0',
  textTransform: 'capitalize'
})

export const ProfileBottomNav = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '.5rem',
  '@xs': {
    flexDirection: 'row',
    gap: '0'
  }
})

export const ProfileInputContainer = styled('div', {
  display: 'flex',
  fontFamily: '$jost',
  width: '100%',
  flexDirection: 'column',
  gap: '26px',
  margin: '26px 0 80px 0',
  '@xs': {
    margin: '26px 0 126px 0',
  }
})
