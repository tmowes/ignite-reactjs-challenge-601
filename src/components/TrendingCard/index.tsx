import { Rating } from '@/components/Rating'

import * as S from './styles'
import { TrendingCardProps } from './types'

const COVER_SIZES = {
  md: { width: 64, height: 94 },
  lg: { width: 108, height: 152 },
}

export function TrendingCard(props: TrendingCardProps) {
  const { data, size = 'md' } = props
  const { author, name, cover_url, alreadyRead, avgRating } = data
  return (
    <S.Container>
      {alreadyRead && <S.ReadBadge>lido</S.ReadBadge>}
      <S.BookCover
        width={COVER_SIZES[size].width}
        height={COVER_SIZES[size].height}
        src={cover_url}
        alt={name}
      />

      <S.BookInfos>
        <strong>{name}</strong>
        <span>{author}</span>
        <Rating rating={avgRating ?? 0} />
      </S.BookInfos>
    </S.Container>
  )
}
