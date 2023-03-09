import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class LatvianTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dienā';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dienas';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'stunda';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'stundas';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minūte';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minūtes';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekunde';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekundes';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Janvārī',
      'Februāris',
      'Martā',
      'Aprīlī',
      'Maijā',
      'jūnijs',
      'Jūlijs',
      'augusts',
      'Septembrī',
      'Oktobris',
      'Novembrī',
      'Decembrī',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.MONTH_DAY;
  }
}

export default LatvianTime;
