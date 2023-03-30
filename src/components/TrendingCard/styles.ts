import Image from 'next/image'

import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '$5',
  padding: '$4 $5',
  background: '$gray700',
  borderRadius: '$md',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  border: '2px solid transparent',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    borderColor: '$gray600',
    boxShadow: '0 0 6px #252D4A66',
  },
})

export const BookCover = styled(Image, {
  objectFit: 'cover',
  borderRadius: '$sm',
})

export const BookInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '9rem',
  strong: {
    fontSize: '$2',
    color: '$gray100',
    lineHeight: '$short',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  span: {
    fontSize: '$2',
    lineHeight: '$base',
    color: '$gray400',
    marginBottom: 'auto',
  },
})

export const ReadBadge = styled('span', {
  display: 'block',
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '$1 $3',
  borderBottomLeftRadius: '$sm',
  backgroundColor: '$green300',
  fontSize: '$2',
  color: '$green100',
  textTransform: 'uppercase',
  fontWeight: '$bold',
})
