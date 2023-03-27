import Image from 'next/image'

import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '$5',
  padding: '$4',
  background: '$gray700',
  borderRadius: '$md',
})

export const BookCover = styled(Image, {})

export const BookInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '12.5rem',
  strong: {
    fontSize: '$2',
    color: '$gray100',
    lineHeight: '$short',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxHeight: '2.8em',
  },
  span: {
    fontSize: '$2',
    lineHeight: '$base',
    color: '$gray400',
  },
})
