import { format } from 'date-fns';

import { Check } from '../../types';

export const isDown = (checks: Check[]) => checks.some(({ down }) => down);

export const upPercent = (checks: Check[]) =>
  (checks.filter(({ down }) => !down).length / checks.length) * 100 + '%';

export const lastCheck = ([newestCheck]: Check[]) =>
  format(new Date(newestCheck.last_check_at), 'LLLL do yyyy, HH:mm');
