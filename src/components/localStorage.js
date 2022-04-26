import { merge } from 'lodash';

import { getLogger } from './logger';
import is from '../utils/is';

class LocalStorage {
  constructor(key) {
    this.key = key;
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
}

export default LocalStorage;
