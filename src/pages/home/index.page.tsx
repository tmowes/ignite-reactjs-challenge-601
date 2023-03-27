import { SectionHeader } from '@/components/SectionHeader'
import { TrendingCard } from '@/components/TrendingCard'
import { MainLayout } from '@/layouts/Main'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import * as S from './styles'

export default function Home() {
  return (
    <MainLayout>
      <S.Container>
        <S.RecentViewsSection>
          <S.Header>
            <ChartLineUp size={24} />
            <h3>Início</h3>
          </S.Header>
          <SectionHeader label="Sua última leitura">
            Ver todos <CaretRight size={16} weight="bold" />
          </SectionHeader>
          <SectionHeader label="Avaliações mais recentes" />
        </S.RecentViewsSection>
        <S.TrendingSection>
          <SectionHeader label="Livros populares">
            Ver todos <CaretRight size={16} weight="bold" />
          </SectionHeader>
          <S.TrendingList>
            <TrendingCard
              title="14 Hábitos de DesenvolvedoresAltamente Produtivos"
              author="Zeno Rocha"
              cover="http://localhost:3000/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
              rating={4.5}
            />
            <TrendingCard
              title="14 Hábitos de Desenvolvedores Altamente Produtivos"
              author="Zeno Rocha"
              cover="http://localhost:3000/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
              rating={4.5}
            />
            <TrendingCard
              title="14 Hábitos de Desenvolvedores Altamente Produtivos"
              author="Zeno Rocha"
              cover="http://localhost:3000/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
              rating={4.5}
            />
            <TrendingCard
              title="14 Hábitos de Desenvolvedores Altamente Produtivos"
              author="Zeno Rocha"
              cover="http://localhost:3000/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
              rating={4.5}
            />
            <TrendingCard
              title="14 Hábitos de Desenvolvedores Altamente Produtivos"
              author="Zeno Rocha"
              cover="http://localhost:3000/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
              rating={4.5}
            />
          </S.TrendingList>
        </S.TrendingSection>
      </S.Container>
    </MainLayout>
  )
}
