import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  button: {
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '$gray200',
    fontSize: '$md',
    fontWeight: '$bold',
    transition: 'all 0.2s ease-in-out',
  },
  a: {
    color: 'inherit',
  },
  'button, input, textarea': {
    fontFamily: 'inherit',
  },
  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
