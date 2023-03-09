import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class VietnameseTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'ngày';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'ngày';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'giờ';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'giờ';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'phút';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'phút';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'giây';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'giây';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'tháng Giêng',
      'Tháng hai',
      'tháng Ba',
      'Tháng 4',
      'có thể',
      'Tháng 6',
      'Tháng 7',
      'tháng Tám',
      'Tháng Chín',
      'Tháng Mười',
      'Tháng 11',
      'Tháng 12',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default VietnameseTime;
