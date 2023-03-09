import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class PersianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'روز';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'روزها';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'ساعت';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'ساعت ها';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'دقیقه';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'دقایق';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'ثانیه';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'ثانیه';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'ژانویه',
      'فوریه',
      'مارس',
      'آوریل',
      'ممکن است',
      'ژوئن',
      'جولای',
      'اوت',
      'سپتامبر',
      'اکتبر',
      'نوامبر',
      'دسامبر',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default PersianTime;
