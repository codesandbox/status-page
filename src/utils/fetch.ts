import axios from 'axios';

export const request = <T>(url: string) =>
  axios
    .create({
      baseURL: 'https://updown.io/api',
      headers: { 'X-API-KEY': process.env.REACT_APP_UPDOWN_API_KEY },
    })
    .get<T>(url);
