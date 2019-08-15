import React, { FunctionComponent } from 'react';

import { Check } from '../../types';
import {
  Circle,
  HeaderStyled,
  LastCheck,
  Percent,
  Title,
  Visual,
} from './elements';
import { isDown, lastCheck, upPercent } from './fn';

type Props = {
  checks: Check[];
  loading: boolean;
};
export const MainStatus: FunctionComponent<Props> = ({ checks, loading }) => (
  <HeaderStyled>
    <div>
      <Title>
        {loading
          ? 'Getting the data'
          : isDown(checks)
          ? 'We are experiences some issues'
          : 'All Services Operational'}
      </Title>

      <LastCheck>
        {loading ? 'Hold on Tight' : `As of ${lastCheck(checks)}`}
      </LastCheck>
    </div>

    <Visual>
      {!loading && <Percent>{upPercent(checks)}</Percent>}

      {loading ? <Circle loading /> : <Circle down={isDown(checks)} />}
    </Visual>
  </HeaderStyled>
);
