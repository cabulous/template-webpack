import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class EnglishAbbreviatedTime extends I18nTimeBase {

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
    return 'hr';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'hr';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'min';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'min';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sec';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sec';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default EnglishAbbreviatedTime;
