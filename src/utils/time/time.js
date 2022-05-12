import is from '../is';

class Time {

  /**
   * @param {number} seconds
   * @return {number}
   */
  static getHours(seconds) {
    return Math.trunc((seconds / 60 / 60) % 60);
  }

  /**
   * @param {number} seconds
   * @return {number}
   */
  static getMinutes(seconds) {
    return Math.trunc((seconds / 60) % 60);
  }

  /**
   * @param {number} seconds
   * @return {number}
   */
  static getSeconds(seconds) {
    return Math.trunc(seconds % 60);
  }

  /**
   * Format time to UI friendly string
   * @param {number|null} time
   * @param {boolean} displayHours - whether displaying hours number
   * @param {boolean} inverted - add a '-' if inverted
   * @return {string}
   */
  static formatTime(time = 0, displayHours = false, inverted = false) {
    // Bail if the value isn't a number
    if (!is.number(time)) {
      return Time.formatTime(null, displayHours, inverted);
    }

    // Format time component to add leading zero
    const format = value => `0${value}`.slice(-2);
    // Breakdown to hours, mins, secs
    let hours = Time.getHours(time);
    const mins = Time.getMinutes(time);
    const secs = Time.getSeconds(time);

    // Do we need to display hours?
    if (displayHours || hours > 0) {
      hours = `${hours}:`;
    } else {
      hours = '';
    }

    // Render
    return `${inverted && time > 0 ? '-' : ''}${hours}${format(mins)}:${format(
      secs)}`;
  }

  /**
   * Add leading zeros
   * @param {string|number} num
   * @param {number} length
   * @return {string}
   */
  static leadingZeros(num, length) {
    const digitLength = length || 2;
    const digit = String(num);
    if (digit.length > digitLength) {
      return digit;
    }
    return (Array(digitLength + 1).join('0') + digit).substr(-digitLength);
  }

  /**
   * @param {number} maxAge
   * @param {number|string} timestamp
   * @return {boolean}
   */
  static isExpired(maxAge, timestamp) {
    const now = +new Date();
    let aTimestamp = timestamp;

    if (is.string(timestamp)) {
      aTimestamp = parseInt(timestamp, 10);
    }

    return now - aTimestamp >= maxAge;
  }

  /**
   * @param {number} ms
   */
  static wait(ms = 300) {
    return new Promise(res => {
      window.setTimeout(res, ms);
    });
  }

  /**
   * @callback WaitConditionFn
   * @return {boolean}
   */

  /**
   * @param {WaitConditionFn} conditionFn
   * @return {Promise<boolean>}
   */
  static async waitUntil(conditionFn) {
    let isReady = conditionFn();

    if (isReady) {
      return true;
    }

    const maxCnt = 50;

    for (let i = 0; i < maxCnt; i += 1) {
      if (isReady) {
        break;
      }

      // eslint-disable-next-line no-await-in-loop
      await Time.wait(100);
      isReady = conditionFn();
    }

    return isReady;
  }

  /**
   * @callback UntilConditionFn
   * @return {boolean|Promise<boolean>}
   */

  /**
   * @param {UntilConditionFn} conditionFn
   * @param {number} tryMax
   * @param {number} interval
   * @return {Promise<boolean>}
   */
  static async waitUntilPromise(
    conditionFn,
    interval = 100,
    tryMax = 50,
  ) {
    let isReady = await conditionFn();

    if (isReady) {
      return true;
    }

    for (let i = 0; i < tryMax; i += 1) {
      if (isReady) {
        break;
      }

      // eslint-disable-next-line no-await-in-loop
      await Time.wait(interval);
      isReady = conditionFn();
    }

    return isReady;
  }

}

export default Time;
