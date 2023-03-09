import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class ThaiTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'วัน';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'วัน';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'ชั่วโมง';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'ชั่วโมง';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'นาที';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'นาที';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'วินาที';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'วินาที';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'อาจ',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default ThaiTime;
