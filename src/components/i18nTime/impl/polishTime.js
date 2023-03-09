import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class PolishTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dzień';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dni';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'godziny';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'godzin';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minuty';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minut';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekundy';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekund';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Stycznia',
      'Lutego',
      'Marca',
      'Kwietnia',
      'Maja',
      'Czerwca',
      'Lipca',
      'Sierpnia',
      'Września',
      'Października',
      'Listopada',
      'Grudnia',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default PolishTime;
