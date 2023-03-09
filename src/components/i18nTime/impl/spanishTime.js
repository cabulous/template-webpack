import { dateNotationConstants } from '../constants';
import I18nTimeBase from '../i18nTimeBase';

class SpanishTime extends I18nTimeBase {

  // eslint-disable-next-line class-methods-use-this
  get day() {
    return 'día';
  }

  // eslint-disable-next-line class-methods-use-this
  get days() {
    return 'días';
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
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  get defaultDateNotation() {
    return dateNotationConstants.DAY_MONTH;
  }
}

export default SpanishTime;
