import { emptyElement } from '../../utils/elements';
import is from '../../utils/is';
import Countdown from './Countdown';

class PlainTextCountdown extends Countdown {

  /**
   * @param {HTMLElement} el - DOM node of the countdown
   * @param {CountdownOptionTypes} options
   */
  constructor(el, options) {
    super(el, options);
    this.#verify(options);
  }

  /**
   * @override
   */
  render() {
    emptyElement(this.el);

    const data = this.getDiffDate();

    if (!is.zero(data.days)) {
      this.el.append(
        `${data.days} ${this.getUnitDays(data.days)} 
         ${data.hours} ${this.getUnitHours(data.hours)} 
         ${data.min} ${this.getUnitMins(data.min)} 
         ${data.sec} ${this.getUnitSecs(data.sec)}
        `,
      );

      return;
    }

    if (!is.zero(data.hours)) {
      this.el.append(
        `${data.hours} ${this.getUnitHours(data.hours)} 
         ${data.min} ${this.getUnitMins(data.min)} 
         ${data.sec} ${this.getUnitSecs(data.sec)}
        `,
      );

      return;
    }

    if (!is.zero(data.min)) {
      this.el.append(
        `${data.min} ${this.getUnitMins(data.min)} 
         ${data.sec} ${this.getUnitSecs(data.sec)}
        `,
      );

      return;
    }

    this.el.append(
      `${data.sec} ${this.getUnitSecs(data.sec)}`,
    );
  }

  /**
   * @param {CountdownOptionTypes} options
   */
  #verify(options) {
    if (is.nullOrUndefined(options.timeUnitText)) {
      this.logger.error(
        `Expect time unit text in countdown options but got null`,
      );
    }
  }
}

export default PlainTextCountdown;
