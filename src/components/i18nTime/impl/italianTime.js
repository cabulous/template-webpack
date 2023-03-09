import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class ItalianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'giorno';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'giorni';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'ora';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'ore';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minuto';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minuti';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'secondo';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'secondi';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default ItalianTime;
