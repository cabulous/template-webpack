import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class IcelandicTime extends I18nTimeBase {

  date(targetDate) {
    return `${targetDate.getDate()}. ${this.month(targetDate.getMonth())}`;
  }

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dagur';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dagar';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'klst';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'klst';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'mín';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'mín';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sek';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sek';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'janúar',
      'febrúar',
      'mars',
      'apríl',
      'maí',
      'júní',
      'júlí',
      'ágúst',
      'september',
      'október',
      'nóvember',
      'desember',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default IcelandicTime;
