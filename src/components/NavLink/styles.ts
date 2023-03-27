import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  a: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'end',
    gap: 8,
    color: '$gray400',
    transition: 'all 0.1s ease-in-out',

    '&:hover': {
      color: '$gray100',
    },
  },

  'a::before': {
    content: '',
    width: 4,
    height: 24,
    borderRadius: 6,
    background: 'transparent',
  },

  '.active': {
    color: '$gray100',
  },

  '.active::before': {
    content: '',
    width: 4,
    height: 24,
    borderRadius: 6,
    background: '$gradient-vertical',
  },
})
