import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class MalayTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'hari';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'hari-hari';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'jam';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'jam';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minit';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minit';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'saat';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'saat';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Januari',
      'Februari',
      'Mac',
      'April',
      'Mungkin',
      'Jun',
      'Julai',
      'Ogos',
      'September',
      'Oktober',
      'November',
      'Disember',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default MalayTime;
