import CacheClient from '../components/cacheClient';
import is from './is';

const CACHE_NAME = 'FileTranslatorCache';

// eslint-disable-next-line import/prefer-default-export
export function getCacheClient() {
  let cache = window[CACHE_NAME];

  if (!is.nullOrUndefined(cache)) {
    return cache;
  }

  cache = new CacheClient();
  window[CACHE_NAME] = cache;

  return cache;
}
