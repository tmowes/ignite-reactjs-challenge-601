import { ComponentProps, ForwardRefRenderFunction } from 'react'

import { IconProps } from 'phosphor-react'

import { Input } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
  iconRight?: IconProps
}

export type TextInputPropsRef = ForwardRefRenderFunction<HTMLInputElement, TextInputProps>
