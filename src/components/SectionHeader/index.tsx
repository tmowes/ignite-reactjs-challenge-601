import * as S from './styles'
import { SectionHeaderProps } from './types'

export function SectionHeader(props: SectionHeaderProps) {
  const { label, children } = props
  return (
    <S.Container>
      <span>{label}</span>
      <S.NavButton>{children}</S.NavButton>
    </S.Container>
  )
}
