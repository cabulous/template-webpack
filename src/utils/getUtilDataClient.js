import UtilDataClient from '../components/utilDataClient';
import is from './is';

const KEY = 'UtilData';

// eslint-disable-next-line import/prefer-default-export
export function getUtilDataClient() {
  let client = window[KEY];

  if (!is.nullOrUndefined(client)) {
    return client;
  }

  client = new UtilDataClient();
  window[KEY] = client;

  return client;
}
