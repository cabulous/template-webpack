import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class UkrainianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'день';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'днів';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'година';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'годин';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'хвилина';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'хвилин';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'секунда';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'секунд';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Може',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default UkrainianTime;
