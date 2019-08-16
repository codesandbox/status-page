import React, { FunctionComponent } from 'react';

import { Container, Dot, Item } from './elements';

export const Legend: FunctionComponent = () => (
  <Container>
    <Item>
      <Dot /> 100% uptime
    </Item>

    <Item>
      <Dot down /> Downtime
    </Item>
  </Container>
);
