import Image from 'next/image'

import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  padding: '$4',
  maxWidth: '90rem',
  height: '100dvh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(598px, 1fr))',
})

export const HeroSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
})

export const HeroBackground = styled(Image, {
  maxHeight: 'calc(100vh - 2rem)',
})

export const Logo = styled(Image, {
  position: 'absolute',
})

export const LoginSection = styled('section', {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LoginContent = styled('div', {
  width: '24rem',
  padding: '$2',
  display: 'flex',
  flexDirection: 'column',
  header: {
    marginBottom: '$10',
    p: {
      color: '$gray200',
      fontSize: '$md',
      fontWeight: '$regular',
    },
  },
})

export const LoginButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: '$gray600',
  borderRadius: '$md',
  padding: '$4',
  marginBottom: '$4',
  fontSize: '$lg',

  'svg, img': {
    marginRight: '$5',
    color: '$purple100',
  },
  '&:not(:disabled):hover': {
    background: '$gray500',
  },
})

export const GoogleSvg = styled(Image, {})

export const Github = styled(Image, {})
