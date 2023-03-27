import { useRouter } from 'next/router'
import Link from 'next/link'

import * as S from './styles'
import { NavLinkProps } from './types'

export function NavLink(props: NavLinkProps) {
  const { children, href, ...rest } = props
  const { asPath } = useRouter()

  let isActive = false

  if (asPath === href || asPath === rest.as) {
    isActive = true
  }

  return (
    <S.Container>
      <Link href={href} className={isActive ? 'active' : ''} {...rest}>
        {children}
      </Link>
    </S.Container>
  )
}
