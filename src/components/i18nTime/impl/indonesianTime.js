import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class IndonesianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'hari';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'hari';
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
    return 'menit';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'menit';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'detik';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'detik';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mungkin',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default IndonesianTime;
