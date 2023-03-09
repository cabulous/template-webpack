import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class DutchTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dag';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dagen';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'uur';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'uren';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minuut';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minuten';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'tweede';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'seconden';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Januari',
      'Februari',
      'Maart',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Augustus',
      'September',
      'Oktober',
      'November',
      'December',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default DutchTime;
