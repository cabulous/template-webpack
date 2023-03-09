import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class ArabicTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'يوم';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'أيام';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'ساعة';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'ساعات';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'دقيقة';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'الدقائق';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'ثانية';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'ثواني';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'اكتوبر',
      'نوفمبر',
      'ديسمبر',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default ArabicTime;
