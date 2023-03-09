import is from '../../utils/is';
import { dateNotationConstants } from './constants';

class I18nTimeBase {

  /**
   * @param {I18nTimeOptionsTypes} options
   */
  constructor(options = {}) {
    this.options = options;
  }

  /**
   * @abstract
   * @return {string}
   */
  // eslint-disable-next-line class-methods-use-this
  get day() {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @return {string}
   */
  // eslint-disable-next-line class-methods-use-this
  get days() {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @return {string}
   */
  // eslint-disable-next-line class-methods-use-this
  get hour() {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @return {string}
   */
  // eslint-disable-next-line class-methods-use-this
  get hours() {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @return {string}
   */
  // eslint-disable-next-line class-methods-use-this
  get minute() {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @return {string}
   */
  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @return {string}
   */
  // eslint-disable-next-line class-methods-use-this
  get second() {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @return {string}
   */
  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @return {string[]}
   */
  // eslint-disable-next-line class-methods-use-this
  get months() {
    throw new Error('implement it in the sub class');
  }

  /**
   * @param {number} zeroIndexedMonth
   * @return {string}
   */
  month(zeroIndexedMonth) {
    return this.months[zeroIndexedMonth];
  }

  /**
   * @return {TimeNotationTypes}
   */
  get timeUnitText() {
    return {
      day: this.day,
      days: this.days,
      hour: this.hour,
      hours: this.hours,
      minute: this.minute,
      minutes: this.minutes,
      second: this.second,
      seconds: this.seconds,
    };
  }

  /**
   * @param {Date} targetDate
   * @return {string}
   */
  // eslint-disable-next-line class-methods-use-this
  date(targetDate) {
    switch (this.dateNotation) {
      case dateNotationConstants.MONTH_DAY:
        return `${this.month(targetDate.getMonth())} ${targetDate.getDate()}`;
      case dateNotationConstants.DAY_MONTH:
        return `${targetDate.getDate()} ${this.month(targetDate.getMonth())}`;
      default:
        return `${this.month(targetDate.getMonth())} ${targetDate.getDate()}`;
    }
  }

  /**
   * @return {dateNotationConstants}
   */
  get dateNotation() {
    if (is.empty(this.options.dateNotation)) {
      return this.defaultDateNotation;
    }
    return this.options.dateNotation;
  }

  /**
   * @abstract
   * @return {dateNotationConstants}
   */
  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    throw new Error('implement it in the sub class');
  }
}

export default I18nTimeBase;
