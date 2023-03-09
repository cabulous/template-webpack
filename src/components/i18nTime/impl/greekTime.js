import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class GreekTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'ημέρα';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'ημέρες';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'ώρα';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'ώρες';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'λεπτό';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'λεπτά';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    // full version: δευτερόλεπτο
    return 'δευτ.';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    // full version: δευτερόλεπτο
    return 'δευτ.';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Ιανουαρίου',
      'Φεβρουαρίου',
      'Μαρτίου',
      'Απριλίου',
      'Μαΐου',
      'Ιουνίου',
      'Ιουλίου',
      'Αυγούστου',
      'Σεπτεμβρίου',
      'Οκτωβρίου',
      'Νοεμβρίου',
      'Δεκεμβρίου',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default GreekTime;
