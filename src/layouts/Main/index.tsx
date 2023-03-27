import { SideBar } from '@/components/SideBar'

import { MainLayoutProps } from './types'
import * as S from './styles'

export function MainLayout(props: MainLayoutProps) {
  const { children } = props
  return (
    <S.Container>
      <S.Navbar>
        <SideBar />
      </S.Navbar>
      <S.Main>{children}</S.Main>
    </S.Container>
  )
}
