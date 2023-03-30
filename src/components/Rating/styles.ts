import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  svg: {
    color: '$purple100',
    boxSizing: 'content-box',
    width: '$1',
    height: '$1',

    '&:first-child': {
      paddingLeft: 0,
    },
  },
})
