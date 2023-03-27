import Image from 'next/image'

import { styled } from '@/styles/stitches.config'
import * as Collapsible from '@radix-ui/react-collapsible'

export const Container = styled('div', {})

export const Header = styled('div', {})

export const Content = styled('div', {})

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

export const CommentContainer = styled('div', {})

export const CollapsibleRoot = styled(Collapsible.Root, {
  width: 300,
})

export const CollapsibleTrigger = styled(Collapsible.Trigger, {})

export const CollapsibleContent = styled(Collapsible.Content, {})

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
