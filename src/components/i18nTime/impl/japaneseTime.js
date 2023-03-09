import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class JapaneseTime extends I18nTimeBase {

  date(targetDate) {
    const month = targetDate.getMonth();
    const date = targetDate.getDate();

    switch (this.dateNotation) {
      case dateNotationConstants.MONTH_DAY:
        return `${this.month(month)}${date}日`;
      case dateNotationConstants.MONTH_DAY_WEEK:
        return (
          `${month + 1}/${date}（${this.dayOfWeek(targetDate.getDay())}）`
        );
      default:
        return `${this.month(month)}${date}日`;
    }
  }

  /**
   * @param {number} zeroIndexedDay
   * @return {string}
   */
  dayOfWeek(zeroIndexedDay) {
    return this.dayOfWeekList[zeroIndexedDay];
  }

  /**
   * @return {string[]}
   */
  // eslint-disable-next-line class-methods-use-this
  get dayOfWeekList() {
    return [
      '日',
      '月',
      '火',
      '水',
      '木',
      '金',
      '土',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return '日';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return '日';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return '時間';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return '時間';
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
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '七月',
      '八月',
      '九月',
      '10月',
      '11月',
      '12月',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default JapaneseTime;
