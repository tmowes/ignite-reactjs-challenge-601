import { useRouter } from 'next/router'

import { RocketLaunch } from 'phosphor-react'

import previewImg from '../../assets/hero.png'
import logoSvg from '../../assets/logo.svg'
import googleSvg from '../../assets/google-icon.svg'
import githubSvg from '../../assets/github-fill.svg'
import * as S from './styles'

export default function SignIn() {
  const { push } = useRouter()

  return (
    <S.Container>
      <S.HeroSection>
        <S.HeroBackground src={previewImg} alt="" />
        <S.Logo src={logoSvg} alt="logo" />
      </S.HeroSection>
      <S.LoginSection>
        <S.LoginContent>
          <header>
            <h2>Boas vindas!</h2>
            <p>Faça seu login ou acesse como visitante.</p>
          </header>
          <S.LoginButton>
            <S.GoogleSvg src={googleSvg} alt="Entrar com Google" />
            Entrar com Google
          </S.LoginButton>
          <S.LoginButton>
            <S.Github src={githubSvg} alt="Entrar com Github" />
            Entrar com Github
          </S.LoginButton>
          <S.LoginButton onClick={() => push('/home')}>
            <RocketLaunch size={32} weight="regular" />
            Acessar como visitante
          </S.LoginButton>
        </S.LoginContent>
      </S.LoginSection>
    </S.Container>
  )
}
