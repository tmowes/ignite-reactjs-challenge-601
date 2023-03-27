// import { StarsRatingView } from '@/components/Rating/StarsRatingView'

import * as S from './styles'
import { TrendingCardProps } from './types'

export function TrendingCard(props: TrendingCardProps) {
  const { cover, title, author, rating } = props
  return (
    <S.Container>
      <S.BookCover width={64} height={94} src={cover} alt={title} />

      <S.BookInfos>
        <strong>{title}</strong>
        <span>{author}</span>
      </S.BookInfos>
      {/* <StarsRatingView rating={rating} /> */}
    </S.Container>
  )
}
