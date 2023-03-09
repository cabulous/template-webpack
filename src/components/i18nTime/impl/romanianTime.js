import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class RomanianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'zi';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'zi';
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
    return 'minut';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minute';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'secunda';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'secunde';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Ianuarie',
      'Februarie',
      'Martie',
      'Aprilie',
      'Mai',
      'Iunie',
      'Iulie',
      'August',
      'Septembrie',
      'Octombrie',
      'Noiembrie',
      'Decembrie',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default RomanianTime;
