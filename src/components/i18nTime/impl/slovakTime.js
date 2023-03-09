import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class SlovakTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'deň';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dni';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'hodina';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'hodiny';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minúta';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minúty';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekunda';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekundy';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Január',
      'Február',
      'Marec',
      'Apríl',
      'Smieť',
      'Jún',
      'Júl',
      'August',
      'Septembra',
      'Október',
      'November',
      'December',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default SlovakTime;
