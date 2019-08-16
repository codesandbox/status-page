import React, { FunctionComponent } from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { HeaderStyled, Title } from './elements';

export const Header: FunctionComponent = () => (
  <HeaderStyled>
    <Logo />

    <Title>System Status</Title>
  </HeaderStyled>
);
