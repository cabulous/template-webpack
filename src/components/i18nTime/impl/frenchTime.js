import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class FrenchTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'jour';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'jours';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'heure';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'heures';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minute';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minutes';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'seconde';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'secondes';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Aout',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default FrenchTime;
