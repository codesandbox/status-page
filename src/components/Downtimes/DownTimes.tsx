import React, { FunctionComponent } from 'react';

import { CheckWithDownTimes } from '../../types';

import { Legend } from '../Legend';
import { Tooltip } from '../Tooltip';

import {
  Alias,
  Data,
  Header,
  Service,
  Services,
  Status,
  AllStatus,
} from './elements';
import { lastMonth, empty, five } from './fn';

type Props = {
  checksWithDownTimes: CheckWithDownTimes[];
};
export const DownTimes: FunctionComponent<Props> = ({
  checksWithDownTimes,
}) => {
  if (!checksWithDownTimes.length) {
    return (
      <>
        <Services>
          {five.map(i => (
            <Service key={i}>
              <Header>
                <Alias>Getting data</Alias>
              </Header>

              <AllStatus>
                {empty.map((_, i) => {
                  return <Status key={i} loading />;
                })}
              </AllStatus>
            </Service>
          ))}
        </Services>

        <Legend />
      </>
    );
  }

  return (
    <>
      <Services>
        {lastMonth(checksWithDownTimes).map(check => (
          <Service key={check.token}>
            <Header>
              <Alias>{check.alias}</Alias>

              <Data>
                {Math.floor(check.uptime * 100) / 100}% uptime for the last 30
                days
              </Data>
            </Header>

            <AllStatus>
              {empty.map((_, i) => {
                const down = lastMonth(checksWithDownTimes).find(otherCheck =>
                  otherCheck.downTimes.find(
                    downTime =>
                      downTime.from30 === i + 1 &&
                      otherCheck.token === check.token
                  )
                );
                return (
                  <div key={i} style={{ position: 'relative' }}>
                    <Status down={Boolean(down)} />

                    <Tooltip
                      downTime={
                        down &&
                        down.downTimes.find(
                          downTime => downTime.from30 === i + 1
                        )
                      }
                    />
                  </div>
                );
              })}
            </AllStatus>
          </Service>
        ))}
      </Services>

      <Legend />
    </>
  );
};
