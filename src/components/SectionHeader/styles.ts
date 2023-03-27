import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$1',
})

export const NavButton = styled('button', {
  all: 'unset',
  background: 'none',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  color: '$purple100',
  fontWeight: '$bold',
  fontSize: '$3',
  cursor: 'pointer',
  '&:hover': {
    color: '$purple200',
  },
})
