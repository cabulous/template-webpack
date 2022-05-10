import is from '../utils/is';
import LocalStorage from './localStorage';
import { getLogger } from './logger';

const SESSION_STORAGE_KEY = 'your-state-storage';
const CACHE_NAME = 'YourState';
const keyConstants = {};

class StateClient {
  constructor() {
    this.logger = getLogger();
    this.cache = new LocalStorage(SESSION_STORAGE_KEY);

    this.#init();
  }

  #init() {

  }

  /**
   * @param {*} data
   * @return {boolean}
   */
  set(data) {
    const logger = getLogger();

    try {
      this.cache.set(data);
      return true;
    } catch (e) {
      logger.error('Fail saving cache');
      logger.error(e);
      return false;
    }
  }

  /**
   * @return {*|null}
   */
  get() {
    return this.cache.get();
  }
}

// eslint-disable-next-line import/prefer-default-export
export function getStateClient() {
  let cache = window[CACHE_NAME];

  if (!is.nullOrUndefined(cache)) {
    return cache;
  }

  cache = new StateClient();
  window[CACHE_NAME] = cache;

  return cache;
}

