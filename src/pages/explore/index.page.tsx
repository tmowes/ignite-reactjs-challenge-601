import { useState } from 'react'

import { Tag } from '@/components/Tag'
import { TextInput } from '@/components/TextInput'
import { categoriesExample } from '@/data'
import { MainLayout } from '@/layouts/Main'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'

import * as S from './styles'

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('Tudo')
  return (
    <MainLayout>
      <S.Container>
        <S.Header>
          <Binoculars size={24} />
          <h3>Explorar</h3>
          <S.SearchContainer>
            <TextInput
              placeholder="Buscar livro ou autor"
              iconRight={<MagnifyingGlass size={20} />}
            />
          </S.SearchContainer>
        </S.Header>
        <S.Tags>
          <Tag
            label="Tudo"
            onClick={() => setSelectedCategory('Tudo')}
            isSelected={selectedCategory === 'Tudo'}
          />
          {categoriesExample.map((category) => (
            <Tag
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              isSelected={selectedCategory === category}
            />
          ))}
        </S.Tags>
      </S.Container>
    </MainLayout>
  )
}
