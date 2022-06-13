import { createElement, emptyElement } from '../../utils/elements';
import is from '../../utils/is';
import { styleConstants } from './constants';
import Countdown from './Countdown';

class DigitCountdown extends Countdown {

  /**
   * @override
   */
  render() {
    emptyElement(this.el);

    switch (this.options.style) {
      case styleConstants.COLON:
        this.renderColonStyle();
        break;
      case styleConstants.TEXT:
        this.renderTextStyle();
        break;
      default:
        this.logger.error(`Unknown countdown style type ${this.options.style}`);
    }
  }

  renderColonStyle() {
    const data = this.getDiffDate();
    const days = this.createDigit(Countdown.leadingZeros(data.days));
    const hours = this.createDigit(Countdown.leadingZeros(data.hours));
    const mins = this.createDigit(Countdown.leadingZeros(data.min));
    const secs = this.createDigit(Countdown.leadingZeros(data.sec));
    const sep1 = this.createColonSeparator();
    const sep2 = this.createColonSeparator();
    const sep3 = this.createColonSeparator();

    if (!is.zero(data.days)) {
      this.el.append(days, sep1, hours, sep2, mins, sep3, secs);
      return;
    }

    this.el.append(hours, sep1, mins, sep2, secs);
  }

  renderTextStyle() {
    const data = this.getDiffDate();
    const days = this.createDigit(Countdown.leadingZeros(data.days));
    const daysUnit = this.createTimeUnit(this.getUnitDays(data.days));
    const hours = this.createDigit(Countdown.leadingZeros(data.hours));
    const hoursUnit = this.createTimeUnit(this.getUnitHours(data.hours));
    const mins = this.createDigit(Countdown.leadingZeros(data.min));
    const minsUnit = this.createTimeUnit(this.getUnitMins(data.min));
    const secs = this.createDigit(Countdown.leadingZeros(data.sec));
    const secsUnit = this.createTimeUnit(this.getUnitSecs(data.sec));

    if (!is.zero(data.days)) {
      this.el.append(days, daysUnit, hours, hoursUnit, mins, minsUnit, secs,
        secsUnit);
      return;
    }

    if (!is.zero(data.hours)) {
      this.el.append(hours, hoursUnit, mins, minsUnit, secs, secsUnit);
      return;
    }

    if (!is.zero(data.min)) {
      this.el.append(mins, minsUnit, secs, secsUnit);

      return;
    }

    this.el.append(secs, secsUnit);
  }

  /**
   * @param {number | string} digit
   * @return {HTMLElement}
   */
  createDigit(digit) {
    return createElement('span', {
      class: this.classNames.digit,
    }, `${digit}`);
  };

  /**
   * @return {HTMLElement}
   */
  createColonSeparator() {
    return createElement('span', {
      class: this.classNames.divider,
    }, ':');
  }

  /**
   * @param {string} text
   * @return {HTMLElement}
   */
  createTimeUnit(text) {
    return createElement('div', {
      class: this.classNames.divider,
    }, text);
  }
}

export default DigitCountdown;
