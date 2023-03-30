import { useState } from 'react'

import { Star } from 'phosphor-react'

import * as S from './styles'
import { RatingProps } from './types'

export function Rating(props: RatingProps) {
  const { rating, onUpdateRating } = props
  const [previewRating, setPreviewRating] = useState(0)

  const canEdit = !!onUpdateRating

  const ratingValue = canEdit ? previewRating : rating

  return (
    <S.Container css={canEdit ? { cursor: 'pointer' } : {}}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`star-${index}`}
          weight={index + 1 <= ratingValue ? 'fill' : 'regular'}
          onMouseEnter={() => (canEdit ? setPreviewRating(index + 1) : null)}
          onMouseLeave={() => (canEdit ? setPreviewRating(rating) : null)}
          onClick={() => (canEdit ? onUpdateRating(ratingValue) : null)}
        />
      ))}
    </S.Container>
  )
}
