import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class BulgarianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'ден';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'дни';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'час';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'часа';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'минута';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'минути';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'втори';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'секунди';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'януари',
      'февруари',
      'Март',
      'април',
      'Може',
      'юни',
      'Юли',
      'Август',
      'Септември',
      'октомври',
      'ноември',
      'декември',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default BulgarianTime;
