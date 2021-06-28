import { check } from 'k6';
import http from 'k6/http';
import { Options } from 'k6/options';
import { base_url } from './constants';

const url = base_url + '/lobby';

export const options: Options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 100 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const res = http.get(url);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
