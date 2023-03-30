import { BookWithRating } from '@/models/book'

export type TrendingCardProps = {
  data: BookWithRating
  size?: 'md' | 'lg'
}
