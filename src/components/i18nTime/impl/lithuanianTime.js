import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class LithuanianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dieną';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dienų';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'valanda';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'valandos';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minutė';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minučių';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekundė';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekundžių';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Sausio mėn',
      'Vasario mėn',
      'Kovas',
      'Balandis',
      'Gegužė',
      'Birželio mėn',
      'Liepa',
      'Rugpjūtis',
      'Rugsėjo mėn',
      'Spalio mėn',
      'Lapkritį',
      'Gruodį',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default LithuanianTime;
