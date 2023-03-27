import { getUserInitials } from '@/helpers/strings/getUserInitials'

import * as S from './styles'
import { AvatarProps } from './types'

export function Avatar(props: AvatarProps) {
  const { name } = props
  return (
    <S.Container>
      <S.Image referrerPolicy="no-referrer" {...props} />
      <S.Fallback delayMs={600}>{getUserInitials(name)}</S.Fallback>
    </S.Container>
  )
}
