import { differenceInDays, isAfter, subDays } from 'date-fns';

import { CheckWithDownTimes, CheckWithLastMonthDownTimes } from '../../types';

const getEmptyArrayWithLength = (length: number) =>
  Array.from(Array(length).keys());
export const empty = getEmptyArrayWithLength(30);
export const five = getEmptyArrayWithLength(5);

export const lastMonth = (checksWithDownTimes: CheckWithDownTimes[]) =>
  checksWithDownTimes
    .map(({ downTimes, ...product }) => {
      const lastMonthDownTimes = downTimes
        .filter(downTime =>
          isAfter(new Date(downTime.started_at), subDays(new Date(), 30))
        )
        .map(downTime => ({
          ...downTime,
          from30:
            30 - differenceInDays(new Date(), new Date(downTime.started_at)),
        }));

      return {
        ...product,
        downTimes: lastMonthDownTimes,
      };
    })
    .sort((a, b) => {
      if (a.alias < b.alias) {
        return -1;
      }

      if (a.alias > b.alias) {
        return 1;
      }

      return 0;
    }) as CheckWithLastMonthDownTimes[];
