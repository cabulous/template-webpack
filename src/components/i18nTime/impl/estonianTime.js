import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class EstonianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'päev';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'päeva';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'tund';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'tunni';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minut';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minuti';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekund';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekundi';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Jaanuar',
      'Veebruar',
      'Märts',
      'Aprill',
      'Mai',
      'Juuni',
      'Juuli',
      'August',
      'September',
      'Oktoober',
      'November',
      'Detsember',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default EstonianTime;
