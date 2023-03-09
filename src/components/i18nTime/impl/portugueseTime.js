import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class PortugueseTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'dia';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'dias';
  }

  // eslint-disable-next-line class-methods-use-this
  get hour() {
    return 'hora';
  }

  // eslint-disable-next-line class-methods-use-this
  get hours() {
    return 'horas';
  }

  // eslint-disable-next-line class-methods-use-this
  get minute() {
    return 'minuto';
  }

  // eslint-disable-next-line class-methods-use-this
  get minutes() {
    return 'minutos';
  }

  // eslint-disable-next-line class-methods-use-this
  get second() {
    return 'segundo';
  }

  // eslint-disable-next-line class-methods-use-this
  get seconds() {
    return 'segundos';
  }

  // eslint-disable-next-line class-methods-use-this
  get months() {
    return [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default PortugueseTime;
