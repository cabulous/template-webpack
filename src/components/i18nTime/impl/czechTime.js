import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class CzechTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'den';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dny';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'hodina';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'hodin';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minuta';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minut';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'sekunda';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'sekundy';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Leden',
      'Únor',
      'Březen',
      'Duben',
      'Smět',
      'červen',
      'červenec',
      'Srpen',
      'Září',
      'říjen',
      'Listopad',
      'Prosinec',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default CzechTime;
