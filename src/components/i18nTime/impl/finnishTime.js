import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class FinnishTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'päivä';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'päivää';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'tunnin';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'tuntia';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minuutti';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minuuttia';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekunti';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekuntia';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Tammikuu',
      'Helmikuu',
      'Maaliskuu',
      'Huhtikuu',
      'Toukokuu',
      'Kesäkuu',
      'Heinäkuu',
      'Elokuu',
      'Syyskuu',
      'Lokakuu',
      'Marraskuu',
      'Joulukuu',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default FinnishTime;
