import { Binoculars, ChartLineUp, User } from 'phosphor-react'

import * as S from './styles'
import logoSvg from '../../assets/logo.svg'
import { NavLink } from '../NavLink'

export function SideBar() {
  return (
    <S.Container>
      <S.AppLogo src={logoSvg} alt="logo" quality={100} />
      <S.NavLinks>
        <NavLink href="/home">
          <ChartLineUp size={24} />
          <span>Início</span>
        </NavLink>

        <NavLink href="/explore">
          <Binoculars size={24} />
          <span>Explorar</span>
        </NavLink>

        <NavLink href="/me">
          <User size={24} />
          <span>Perfil</span>
        </NavLink>
      </S.NavLinks>
    </S.Container>
  )
}
