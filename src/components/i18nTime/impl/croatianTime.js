import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class CroatianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dan';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dana';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'sat';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'sati';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minuta';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minuta';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekunda';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekundi';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Siječanj',
      'Veljača',
      'Ožujak',
      'Travanj',
      'Svibanj',
      'Lipanj',
      'Srpanj',
      'Kolovoz',
      'Rujan',
      'Listopad',
      'Studeni',
      'Prosinac',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default CroatianTime;
