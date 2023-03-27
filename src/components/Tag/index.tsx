import * as S from './styles'
import { TagProps } from './types'

export function Tag(props: TagProps) {
  const { label, onClick, isSelected = false } = props
  return (
    <S.Container className={isSelected ? 'selected' : ''} onClick={onClick}>
      {label}
    </S.Container>
  )
}
