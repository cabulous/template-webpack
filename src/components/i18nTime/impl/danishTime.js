import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class DanishTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dag';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dage';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'time';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'timer';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minut';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minutter';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekund';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekunder';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Januar',
      'Februar',
      'Marts',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'August',
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

export default DanishTime;
