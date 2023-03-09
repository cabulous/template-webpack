import { createElement } from '../../../utils/elements';
import classnames from './classnames';
import stylerOptionDefaults from './defaults';

class StylerBase {

  /**
   * @param {StylerOptionTypes} options
   */
  constructor(options = {}) {
    this.options = {
      ...stylerOptionDefaults,
      ...options,
    };
  }

  /**
   * @abstract
   * @param {number|string} days
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  renderDays(days) {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @param {number|string} hours
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  renderHours(hours) {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @param {number|string} mins
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  renderMins(mins) {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @param {number|string} secs
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  renderSecs(secs) {
    throw new Error('implement it in the sub class');
  }

  /**
   * @param {number | string} digit
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createDigitContainer(digit) {
    const num = this.optionalLeadingZero(digit);
    return createElement('span', {
      class: classnames.digit,
    }, num);
  };

  /**
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createDayContainer() {
    return createElement('span', {
      class: `${classnames.part} ${classnames.partType.day}`,
    });
  }

  /**
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createHourContainer() {
    return createElement('span', {
      class: `${classnames.part} ${classnames.partType.hour}`,
    });
  }

  /**
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createMinContainer() {
    return createElement('span', {
      class: `${classnames.part} ${classnames.partType.min}`,
    });
  }

  /**
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createSecContainer() {
    return createElement('span', {
      class: `${classnames.part} ${classnames.partType.sec}`,
    });
  }

  /**
   * @param {number} digit
   * @return {string}
   */
  optionalLeadingZero(digit) {
    if (this.options.isLeadingZero) {
      return StylerBase.leadingZeros(digit);
    }
    return `${digit}`;
  }

  /**
   * Add leading zeros to a number
   * @param  {Number} num    Input number
   * @param  {Number} [length] Length of the desired output
   * @return {String}        String of the desired length with leading zeros
   */
  static leadingZeros(num, length = 2) {
    const digit = String(num);
    if (digit.length >= length) {
      return digit;
    }
    const str = Array(length + 1).join('0') + digit;
    return str.substring(str.length - length);
  };
}

export default StylerBase;
