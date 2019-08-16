import React from 'react';
import { isDown, upPercent, lastCheck } from './fn';
import {
  Title,
  LastCheck,
  Circle,
  HeaderStyled,
  Percent,
  Visual,
} from './elements';

const MainStatus = ({ loading, up }) => {
  return (
    <HeaderStyled>
      <div>
        <Title>
          {loading
            ? 'Getting the data'
            : !isDown(up)
            ? 'All Services are Operational'
            : 'We are experiencing some issues'}
        </Title>
        <LastCheck>
          {loading ? 'Hold on Tight' : `As of ${lastCheck(up)}`}
        </LastCheck>
      </div>

      <Visual>
        {!loading && <Percent>{upPercent(up)}</Percent>}
        {loading ? <Circle loading /> : <Circle down={isDown(up)} />}
      </Visual>
    </HeaderStyled>
  );
};

export default MainStatus;
