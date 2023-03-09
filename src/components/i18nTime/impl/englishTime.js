import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class EnglishTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'day';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'days';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'hour';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'hours';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minute';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minutes';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'second';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'seconds';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default EnglishTime;
