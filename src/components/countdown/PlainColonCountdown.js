import { createElement } from '../../utils/elements';
import Countdown from './Countdown';

class PlainColonCountdown extends Countdown {

  render() {
    this.el.innerHTML = '';

    const data = this.getDiffDate();
    const mins = this.createDigit(data.min);
    const secs = this.createDigit(data.sec);
    const divider = this.createDivider();

    this.el.append(mins, divider, secs);
  }

  /**
   * @param {number} digit
   * @return {HTMLElement}
   */
  createDigit(digit) {
    return createElement('div', {
      class: this.classNames.digit,
    }, Countdown.leadingZeros(digit))
  }

  /**
   * @return {HTMLElement}
   */
  createDivider() {
    return createElement('div', {
      class: this.classNames.divider,
    }, ':');
  }
}

export default PlainColonCountdown;
