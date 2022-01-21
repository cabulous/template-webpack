import { getLogger } from '../utils/getLogger';
import SessionStorage from './sessionStorage';

const SESSION_STORAGE_KEY = 'session-storage';

class CacheClient {
  constructor() {
    this.cache = new SessionStorage(SESSION_STORAGE_KEY);
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
    const data = this.cache.get();
    const success = CacheClient.verify(data);
    if (success) {
      return data;
    }
    return null;
  }

  /**
   * @param {*} data
   * @return {boolean}
   */
  static verify(data) {
    const logger = getLogger();
  }
}

export default CacheClient;
