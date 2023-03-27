/* eslint-disable react/function-component-definition */
import { forwardRef } from 'react'

import * as S from './styles'
import { TextInputPropsRef } from './types'

const TextInputBase: TextInputPropsRef = (props, ref) => {
  const { prefix, iconRight } = props
  return (
    <S.Container>
      <>
        {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input ref={ref} {...props} />
        {!!iconRight && iconRight}
      </>
    </S.Container>
  )
}

export const TextInput = forwardRef(TextInputBase)
