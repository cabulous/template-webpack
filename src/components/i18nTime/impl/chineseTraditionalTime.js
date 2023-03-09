import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class ChineseTraditionalTime extends I18nTimeBase {

  date(targetDate) {
    return `${this.month(targetDate.getMonth())} ${targetDate.getDate()} 日`;
  }

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return '天';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return '天';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return '小時';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return '小時';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return '分';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return '分';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return '秒';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return '秒';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      '1 月',
      '2 月',
      '3 月',
      '4 月',
      '5 月',
      '6 月',
      '7 月',
      '8 月',
      '9 月',
      '10 月',
      '11 月',
      '12 月',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default ChineseTraditionalTime;
