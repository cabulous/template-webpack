import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class SwedishTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dag';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dagar';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'timme';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'timmar';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minut';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minuter';
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
      'Januari',
      'Februari',
      'Mars',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'Augusti',
      'September',
      'Oktober',
      'November',
      'December',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default SwedishTime;
