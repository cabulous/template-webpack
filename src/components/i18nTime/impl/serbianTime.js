import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class SerbianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'дан';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'дана';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'сат';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'сати';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'минуту';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'минута';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'секунда';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'секунди';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Јануара',
      'Фебруара',
      'Март',
      'Април',
      'Може',
      'Јуна',
      'Јули',
      'Август',
      'септембар',
      'Октобар',
      'Новембар',
      'Децембар',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default SerbianTime;
