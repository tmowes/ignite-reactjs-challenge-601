import { SectionHeader } from '@/components/SectionHeader'
import { MainLayout } from '@/layouts/Main'
import { CaretRight, User } from 'phosphor-react'

import * as S from './styles'

export default function Me() {
  return (
    <MainLayout>
      <S.Container>
        <S.RecentViewsSection>
          <S.Header>
            <User size={24} />
            <h3>Perfil</h3>
          </S.Header>
          <SectionHeader label="" />
          <SectionHeader label="Avaliações mais recentes" />
        </S.RecentViewsSection>
        <S.TrendingSection>
          <SectionHeader label="Livros populares">
            Ver todos <CaretRight size={16} weight="bold" />
          </SectionHeader>
        </S.TrendingSection>
      </S.Container>
    </MainLayout>
  )
}
