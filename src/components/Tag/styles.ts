import { styled } from '@stitches/react'

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 16px',
  border: '1px solid $purple100',
  borderRadius: '$full',
  color: '$purple100',
  background: 'transparent',
  fontWeight: '$regular',

  textAlign: 'center',
  whiteSpace: 'nowrap',

  '&:hover': {
    background: '$purple200',
    color: '$gray100',
  },

  '&.selected': {
    backgroundColor: '$purple200',
    color: '$gray100',
    fontWeight: '$medium',
    border: '1px solid $purple200',
  },
})
