import React, { FunctionComponent } from 'react';
import { format } from 'date-fns';

import { DownTime } from '../../types';

import { Circle, Info, Container } from './elements';

type Props = {
  downTime?: DownTime;
};
export const Tooltip: FunctionComponent<Props> = ({ downTime }) => (
  <Container>
    {downTime ? (
      <>
        <Info>{format(new Date(downTime.started_at), 'iiii d LLLL')}</Info>

        <Info bold>Down for {Math.floor(downTime.duration / 60)}m</Info>
      </>
    ) : (
      <Info>
        <Circle />
        100% Online
      </Info>
    )}
  </Container>
);
