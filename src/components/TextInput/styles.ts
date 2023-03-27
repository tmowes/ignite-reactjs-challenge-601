import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  backgroundColor: '$gray800',
  padding: '$3 $5',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $gray500',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: '$gray200',

  svg: {
    color: '$gray500',
  },

  transition: 'all 200ms ease-in-out',

  '&:has(input:focus)': {
    borderColor: '$green200',
    boxShadow: '0 0 6px #255D6A66',

    svg: {
      color: '$green200',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
