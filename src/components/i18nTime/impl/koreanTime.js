import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class KoreanTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return '일';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return '일';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return '시간';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return '시간';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return '분';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return '분';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return '초';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return '초';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default KoreanTime;
