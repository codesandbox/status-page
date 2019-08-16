import { useState, useEffect } from 'react';

import { Check } from '../types';
import { request } from '../utils/fetch';

const getChecks = async () => (await request<Check[]>('/checks')).data;

export const useChecks = () => {
  const [checks, setChecks] = useState<Check[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getChecks().then(checks => {
      setChecks(checks);

      setLoading(false);
    });
  }, []);

  return [checks, loading] as [Check[], boolean];
};
