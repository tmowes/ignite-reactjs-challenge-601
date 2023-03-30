import { Book } from '@prisma/client'

export type BookWithRating = Book & {
  ratings: number
  avgRating: number | null
  alreadyRead: boolean
}
