import { check } from 'k6';
import http from 'k6/http';
/* @ts-ignore */
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';
import { base_url } from './constants';
import { Options } from 'k6/options';

const url = base_url + '/lobby/';

export const options: Options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 100 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const res = http.get(url + randomIntBetween(500, 1000), {
    tags: { name: 'get_lobby_details' },
  });
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
