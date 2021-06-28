import http from 'k6/http';
import { Options } from 'k6/options';
/* @ts-ignore */
import {
  randomIntBetween,
  randomString,
} from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';
import { base_url } from './constants';

const url = base_url + '/lobby';

export const options: Options = {
  vus: 1,
  duration: '1s',
};

export interface LobbyDTO {
  name: string;
  entryFees: number;
  maxMembers: number;
}

export default function () {
  const lobbyDTO: LobbyDTO = {
    name: randomString(10),
    entryFees: randomIntBetween(1, 1000),
    maxMembers: randomIntBetween(1, 10),
  };

  const body: string = JSON.stringify(lobbyDTO);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, body, params);
}
