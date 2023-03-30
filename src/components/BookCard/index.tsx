import { useState } from 'react'

import dayjs from 'dayjs'

import { Avatar } from '../Avatar'
import { BookCardProps } from './types'
import * as S from './styles'

export function BookCard(props: BookCardProps) {
  const { data } = props
  const { name, created_at, cover_url, author, summary } = data
  const [open, setOpen] = useState(false)

  const published_date = dayjs(created_at)
  const publishedDateFormatted = published_date.format('DD[ de ]MMMM[ às ]HH:mm')
  const publishedDistanceToNow = published_date.fromNow()

  return (
    <S.Container>
      <S.Header>
        <Avatar src={cover_url} name={name} />
        <span>{name}</span>
        <time title={publishedDateFormatted} dateTime={published_date.toISOString()}>
          {publishedDistanceToNow}
        </time>
        {/* <StarsRating precision={1 / 2} /> */}
      </S.Header>

      <S.Content>
        <S.BookCover
          src={`http://localhost:3000${cover_url}`}
          height={152}
          width={108}
          quality={100}
          alt={`${name} cover`}
        />

        <S.BookInfos>
          <strong>{name}</strong>
          <span>{author}</span>
        </S.BookInfos>

        <S.CollapsibleRoot open={open} onOpenChange={setOpen} css={{ width: '100%' }}>
          <S.CommentContainer>
            <p>
              {summary?.substring(0, 229)}{' '}
              {!open ? (
                '...'
              ) : (
                <S.CollapsibleContent>{summary.substring(229)}</S.CollapsibleContent>
              )}
            </p>
            <S.CollapsibleTrigger asChild>
              <S.NavButton>{!open ? 'ver mais' : 'ver menos'}</S.NavButton>
            </S.CollapsibleTrigger>
          </S.CommentContainer>
        </S.CollapsibleRoot>
      </S.Content>
    </S.Container>
  )
}
