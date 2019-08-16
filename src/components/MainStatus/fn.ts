import { format } from 'date-fns';

import { Check } from '../../types';

export const isDown = (checks: Check[]) => checks.some(({ down }) => down);

export const upPercent = (checks: Check[]) =>
  (checks.filter(({ down }) => !down).length / checks.length) * 100 + '%';

export const lastCheck = ([newestCheck]: Check[]) =>
  format(newestCheck.last_check_at, 'MMMM Do YYYY[,] h:mA');
