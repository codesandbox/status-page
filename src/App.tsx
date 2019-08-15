import React, { FunctionComponent } from 'react';

import { Footer, Main, Wrapper } from './elements';

import { DownTimes } from './components/Downtimes';
import { Header } from './components/Header';
import { MainStatus } from './components/MainStatus';
import { useDowntime } from './hooks/useDowntime';

export const App: FunctionComponent = () => {
  const [checksWithDownTimes, checks, loading] = useDowntime();

  return (
    <Wrapper>
      <Header />

      <Main>
        <MainStatus checks={checks} loading={loading} />

        <DownTimes checksWithDownTimes={checksWithDownTimes} />
      </Main>

      <Footer>
        Updates will be provided via the{' '}
        <a
          href="https://twitter.com/csbstatus"
          rel="noopener noreferrer"
          target="_blank"
        >
          @csbstatus
        </a>{' '}
        twitter feed—follow us there!
      </Footer>
    </Wrapper>
  );
};
