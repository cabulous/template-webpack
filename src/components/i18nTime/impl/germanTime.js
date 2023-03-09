import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class GermanTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'Tag';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'Tage';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'Stunde';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'Stunden';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'Minute';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'Minuten';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'Sekunde';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'Sekunden';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default GermanTime;
