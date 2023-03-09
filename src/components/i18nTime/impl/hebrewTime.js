import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class HebrewTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'יום';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'ימים';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'שעה';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'שעה (ות';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'דקה';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'דקות';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'שניה';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'שניות';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'ינואר',
      'פברואר',
      'מרץ',
      'אפריל',
      'מאי',
      'יוני',
      'יולי',
      'אוגוסט',
      'ספטמבר',
      'אוקטובר',
      'נובמבר',
      'דצמבר',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default HebrewTime;
