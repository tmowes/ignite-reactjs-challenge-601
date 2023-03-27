import { useState } from 'react'

import dayjs from 'dayjs'

import { Avatar } from '../Avatar'
import { BookCardProps } from './types'
import * as S from './styles'

export function BookCard(props: BookCardProps) {
  const { name, publishedDate, avatarUrl, title, author, cover, comment } = props
  const [open, setOpen] = useState(false)

  const published_date = dayjs(publishedDate)
  const publishedDateFormatted = published_date.format('DD[ de ]MMMM[ às ]HH:mm')
  const publishedDistanceToNow = published_date.fromNow()

  return (
    <S.Container>
      <S.Header>
        <Avatar src={avatarUrl} name={name} />
        <span>{name}</span>
        <time title={publishedDateFormatted} dateTime={published_date.toISOString()}>
          {publishedDistanceToNow}
        </time>
        {/* <StarsRating precision={1 / 2} /> */}
      </S.Header>

      <S.Content>
        <S.BookCover
          src={cover}
          height={152}
          width={108}
          quality={100}
          alt={`${title} cover`}
        />

        <S.BookInfos>
          <strong>{title}</strong>
          <span>{author}</span>
        </S.BookInfos>

        <S.CollapsibleRoot open={open} onOpenChange={setOpen} css={{ width: '100%' }}>
          <S.CommentContainer>
            <p>
              {comment.substring(0, 229)}{' '}
              {!open ? (
                '...'
              ) : (
                <S.CollapsibleContent>{comment.substring(229)}</S.CollapsibleContent>
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
