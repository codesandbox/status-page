// const checks = {
//   token: 'ngg8',
//   url: 'https://updown.io',
//   alias: '',
//   last_status: 200,
//   uptime: 100.0,
//   down: false,
//   down_since: null,
//   error: null,
//   period: 30,
//   apdex_t: 0.5,
//   string_match: '',
//   enabled: true,
//   published: true,
//   disabled_locations: [],
//   last_check_at: '2016-02-07T13:59:51Z',
//   next_check_at: '2016-02-07T14:00:21Z',
//   mute_until: null,
//   favicon_url: 'https://updown.io/favicon.png',
//   custom_headers: {},
//   http_verb: 'GET/HEAD',
//   http_body: null,
//   ssl: {
//     tested_at: '2016-02-07T13:30:08Z',
//     valid: true,
//     error: null,
//   },
// };
export type Check = {
  alias: string;
  down: boolean;
  last_check_at: string;
  token: string;
  uptime: number;
};

// const downtimes = {
//   error: 'Timeout was reached',
//   started_at: '2015-12-03T09:08:34Z',
//   ended_at: '2015-12-03T09:14:19Z',
//   duration: 346,
// };
export type DownTime = {
  duration: number;
  started_at: string;
};

export type CheckWithDownTimes = Check & {
  downTimes: DownTime[];
};

type LastMonthDownTime = DownTime & {
  from30: number;
};
export type CheckWithLastMonthDownTimes = Check & {
  downTimes: LastMonthDownTime[];
};
