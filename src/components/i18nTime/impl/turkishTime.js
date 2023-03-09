import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class TurkishTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'gün';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'gün';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'saat';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'saat';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'dakika';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'dakika';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'saniye';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'saniye';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default TurkishTime;
