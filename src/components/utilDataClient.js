import { getLogger } from './logger';
import SessionStorage from './sessionStorage';

const SESSION_STORAGE_KEY = 'util-storage';
const dataKeyConstants = {
  PREVIOUS_PAGE: 'previous_page',
};

class UtilDataClient {
  constructor() {
    this.storage = new SessionStorage(SESSION_STORAGE_KEY);
  }

  /**
   * @param {*} data
   * @return {boolean}
   */
  set(data) {
    const logger = getLogger();

    try {
      this.storage.set(data);
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
    return this.storage.get();
  }

  /**
   * @param {string} url
   */
  setPreviousPage(url) {
    this.storage.set({
      [dataKeyConstants.PREVIOUS_PAGE]: url,
    });
  }

  /**
   * @return {string|null}
   */
  getPreviousPage() {
    return this.storage.get(dataKeyConstants.PREVIOUS_PAGE);
  }

}

export default UtilDataClient;
