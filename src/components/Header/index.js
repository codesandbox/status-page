import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { HeaderStyled, Title } from './elements'

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Title>System Status</Title>
    </HeaderStyled>
  )
}

export default Header
