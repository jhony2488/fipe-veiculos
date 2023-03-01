import Loading from '../Loading'
import React from 'react'
import { PropsButton } from './types'
import { ButtonTouch } from './styles'

const Button = ({
  loading = false,
  disabled = false,
  text,
  onPress,
  typeColor = 'primary',
  type = 'button'
}: PropsButton) => {
  return (
    <ButtonTouch
      disabled={disabled || loading}
      onClick={onPress}
      typeColor={typeColor}
      type={type}
    >
      {loading ? <Loading color={typeColor === 'primary' ? 'inherit' : 'primary'} /> : text}
    </ButtonTouch>
  )
}

export default Button
