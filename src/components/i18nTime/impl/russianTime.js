import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class RussianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'день';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'дней';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'час';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'часов';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'минут';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'минут';
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
      'январь',
      'февраль',
      'марш',
      'апреля',
      'май',
      'июнь',
      'июль',
      'августейший',
      'сентябрь',
      'октября',
      'ноябрь',
      'Декабрь',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default RussianTime;
