import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class SlovenianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dan';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dnevi';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'uro';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'ure';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minuto';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minut';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekundo';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekund';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Januarja',
      'Februarja',
      'Marec',
      'April',
      'Maj',
      'Junij',
      'Julija',
      'Avgust',
      'Septembra',
      'Oktober',
      'Novembra',
      'December',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default SlovenianTime;
