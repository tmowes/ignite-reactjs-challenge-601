import { ComponentProps } from 'react'

import { AvatarImage } from '@radix-ui/react-avatar'

export type AvatarProps = ComponentProps<typeof AvatarImage> & {
  name: string
}
