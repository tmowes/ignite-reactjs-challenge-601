import Image from 'next/image'

import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$10',
})

export const AppLogo = styled(Image, {
  width: '100%',
  marginBottom: '4rem',
})

export const NavLinks = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  listStyle: 'none',
})
