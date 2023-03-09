import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class HindiTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'दिन';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'दिन';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'घंटा';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'घंटे';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'मिनट';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'मिनट';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'सेकंड';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'सेकंड';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'जनवरी',
      'फरवरी',
      'मार्च',
      'अप्रैल',
      'मई',
      'जून',
      'जुलाई',
      'अगस्त',
      'सितंबर',
      'अक्टूबर',
      'नवंबर',
      'दिसंबर',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default HindiTime;
