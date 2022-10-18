import { merge } from 'lodash';

import { getLogger } from './logger';
import is from '../utils/is';

const TIMESTAMP_KEY = 'timestamp';
const MAX_AGE_MILLISECONDS = 24 * 60 * 60 * 1000;

class LocalStorage {

  /**
   * @param {string} key
   */
  constructor(key) {
    this.logger = getLogger();
    this.key = key;
    this.setTimestampIfNotPresent();
  }

  static get supported() {
    const logger = getLogger();

    try {
      if (!('localStorage' in window)) {
        logger.error('localStorage not in window');
        return false;
      }

      const test = '___test';

      // Try to use it (it might be disabled, e.g. user is in private mode)
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);

      return true;
    } catch (e) {
      logger.error('localStorage not supported');
      return false;
    }
  }

  /**
   * @param {string} [key]
   * @return {*|null}
   */
  get(key) {
    if (!LocalStorage.supported) {
      return null;
    }

    const store = window.localStorage.getItem(this.key);

    if (is.empty(store)) {
      return null;
    }

    const json = JSON.parse(store);

    return is.string(key) && key.length ? json[key] : json;
  }

  /**
   * @param {*} object
   */
  set(object) {
    if (!LocalStorage.supported) {
      return;
    }

    // Can only store objects
    if (!is.object(object)) {
      return;
    }

    // Get current storage
    let storage = this.get();

    // Default to empty object
    if (is.empty(storage)) {
      storage = {};
    }

    // Update the working copy of the values
    storage = merge(storage, object);

    // Update storage
    window.localStorage.setItem(this.key, JSON.stringify(storage));
  }

  /**
   * @param {number} maxAge - in milliseconds
   * @return {boolean}
   */
  isExpired(maxAge = MAX_AGE_MILLISECONDS) {
    let timestamp = this.get(TIMESTAMP_KEY);
    const now = +new Date();

    if (is.nullOrUndefined(timestamp)) {
      this.set({ [TIMESTAMP_KEY]: now });
      return false;
    }

    if (is.string(timestamp)) {
      timestamp = parseInt(timestamp, 10);
    }

    return now - timestamp >= maxAge;
  }

  /**
   * @param {number} maxAge - in milliseconds
   * @return {number} - in milliseconds
   */
  expireTime(maxAge = MAX_AGE_MILLISECONDS) {
    let timestamp = this.get(TIMESTAMP_KEY);
    const now = +new Date();

    if (is.nullOrUndefined(timestamp)) {
      this.set({ [TIMESTAMP_KEY]: now });
    }

    if (is.string(timestamp)) {
      timestamp = parseInt(timestamp, 10);
    }

    return timestamp + maxAge;
  }

  refresh() {
    this.logger.log('[Local Storage] refresh');
    window.localStorage.removeItem(this.key);
    this.updateTimestamp();
  }

  cleanUp() {
    if (this.isExpired()) {
      this.logger.log('[Local Storage] expired');
      this.refresh();
    }
  }

  updateTimestamp() {
    this.set({ [TIMESTAMP_KEY]: +new Date() });
  }

  setTimestampIfNotPresent() {
    const timestamp = this.get(TIMESTAMP_KEY);

    if (is.nullOrUndefined(timestamp)) {
      this.updateTimestamp();
    }
  }
}

export default LocalStorage;
