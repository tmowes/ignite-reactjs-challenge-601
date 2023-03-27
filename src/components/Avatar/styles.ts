import { styled } from '@/styles/stitches.config'
import * as RadixAvatar from '@radix-ui/react-avatar'

export const Container = styled(RadixAvatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '45px',
  height: '45px',
  borderRadius: '100%',
  backgroundColor: '$gray100',
})

export const Image = styled(RadixAvatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const Fallback = styled(RadixAvatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray800',
  color: '$gray100',
  fontSize: '$md',
  lineHeight: '$base',
  fontWeight: '$bold',
})
