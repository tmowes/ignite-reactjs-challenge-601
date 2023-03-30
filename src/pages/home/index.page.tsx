import Link from 'next/link'

import { SectionHeader } from '@/components/SectionHeader'
import { TrendingCard } from '@/components/TrendingCard'
import { MainLayout } from '@/layouts/Main'
import { api } from '@/libs/axios'
import { BookWithRating } from '@/models/book'
import { useQuery } from '@tanstack/react-query'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import * as S from './styles'

export default function Home() {
  const { data: trendingBooks } = useQuery<BookWithRating[]>(['trending-books'], async () => {
    const { data } = await api.get('/books/trending')
    return data?.books ?? []
  })
  return (
    <MainLayout>
      <S.Container>
        <S.RecentViewsSection>
          <S.Header>
            <ChartLineUp size={32} />
            <h3>Início</h3>
          </S.Header>
          <SectionHeader label="Sua última leitura">
            Ver todos <CaretRight size={16} weight="bold" />
          </SectionHeader>
          <SectionHeader label="Avaliações mais recentes" />
        </S.RecentViewsSection>
        <S.TrendingSection>
          <SectionHeader label="Livros populares">
            <Link href="/explore" as="a">
              Ver todos <CaretRight size={16} weight="bold" />
            </Link>
          </SectionHeader>
          <S.TrendingList>
            {trendingBooks?.map((book) => (
              <TrendingCard key={`trending-${book.id}`} data={book} />
            ))}
          </S.TrendingList>
        </S.TrendingSection>
      </S.Container>
    </MainLayout>
  )
}
