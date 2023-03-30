import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  textDecoration: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$10',
  gap: '$2',
})

export const NavButton = styled('button', {
  background: 'none',
  border: 'none',
  alignItems: 'center',
  display: 'flex',
  fontSize: '$md',
  fontWeight: '$bold',
  color: '$purple100',
  padding: '$2 0 $2 $2',
  borderRadius: '$sm',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#8381D90F',
    boxShadow: '0 0 6px #8381D940',
  },
  a: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },
})
