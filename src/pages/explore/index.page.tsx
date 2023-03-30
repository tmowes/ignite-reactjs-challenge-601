import { useState } from 'react'

import { Tag } from '@/components/Tag'
import { TextInput } from '@/components/TextInput'
import { MainLayout } from '@/layouts/Main'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/libs/axios'
import { Category } from '@/models/categories'
import { BookWithRating } from '@/models/book'
import { TrendingCard } from '@/components/TrendingCard'

import * as S from './styles'

export default function Explore() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data: categories } = useQuery<Category[]>(['categories'], async () => {
    const { data } = await api.get('/books/categories')
    return data?.categories ?? []
  })

  const { data: books } = useQuery<BookWithRating[]>(['books', selectedCategory], async () => {
    const { data } = await api.get('/books', { params: { category: selectedCategory } })
    return data?.books ?? []
  })

  const filteredBooks = books?.filter(
    (book) =>
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <MainLayout>
      <S.Container>
        <S.Header>
          <Binoculars size={32} />
          <h3>Explorar</h3>
          <S.SearchContainer>
            <TextInput
              value={search}
              onChange={({ target }) => setSearch(target.value)}
              placeholder="Buscar livro ou autor"
              iconRight={<MagnifyingGlass size={20} />}
            />
          </S.SearchContainer>
        </S.Header>
        <S.Tags>
          <Tag
            label="Tudo"
            onClick={() => setSelectedCategory(null)}
            isSelected={selectedCategory === null}
          />
          {categories?.map((category) => (
            <Tag
              key={category.id}
              label={category.name}
              onClick={() => setSelectedCategory(category.id)}
              isSelected={selectedCategory === category.id}
            />
          ))}
        </S.Tags>
        <S.BooksGrid>
          {filteredBooks?.map((book) => (
            <TrendingCard key={book.id} size="lg" data={book} />
          ))}
        </S.BooksGrid>
      </S.Container>
    </MainLayout>
  )
}
