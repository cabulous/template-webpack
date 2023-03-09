import { emptyElement } from '../../utils/elements';
import is from '../../utils/is';
import { getLogger } from '../logger';
import countdownDefaults from './countdownDefaults';

class Countdown {

  /**
   * @param {HTMLElement} element - DOM node of the countdown
   * @param {PartManagerBase} partManager
   * @param {CountdownOptionTypes} options
   */
  constructor(element, partManager, options) {
    this.logger = getLogger();
    this.el = element;
    this.partManager = partManager;

    /**
     * @type {CountdownOptionTypes}
     */
    this.options = {};

    /**
     * Interval reference or false if counter is stopped
     * @type {Boolean || Number}
     */
    this.interval = false;

    this.#mergeOptions(options);
    this.#init();
  }

  #init() {
    // don't start if the countdown is already started
    if (this.interval) {
      return;
    }

    this.render();

    if (this.options.refresh) {
      this.interval = window.setInterval(() => {
        this.render();
      }, this.options.refresh);
    }
  };

  /**
   * Get the difference between now and the end date
   * @return {CountdownDiffTypes} Object with the diff information (years, days, hours, min, sec, millisec)
   */
  getDiffDate() {
    if (typeof this.options.date !== 'object') {
      this.options.date = new Date(this.options.date);
    }

    let diff = (this.options.date.getTime() - Date.now() + this.options.offset)
      / 1000;

    const dateData = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    if (diff <= 0) {
      if (this.interval) {
        this.#stop();
        if (is.function(this.options.onEnd)) {
          this.options.onEnd();
        }
      }
      return dateData;
    }

    if (diff >= (365.25 * 86400)) {
      dateData.years = Math.floor(diff / (365.25 * 86400));
      diff -= dateData.years * 365.25 * 86400;
    }

    if (diff >= 86400) {
      dateData.days = Math.floor(diff / 86400);
      diff -= dateData.days * 86400;
    }

    if (diff >= 3600) {
      dateData.hours = Math.floor(diff / 3600);
      diff -= dateData.hours * 3600;
    }

    if (diff >= 60) {
      dateData.min = Math.floor(diff / 60);
      diff -= dateData.min * 60;
    }

    dateData.sec = Math.round(diff);

    dateData.millisec = diff % 1 * 1000;

    return dateData;
  };

  /**
   * Merge default options and options into this.options
   * @param {CountdownOptionTypes} customOptions
   */
  #mergeOptions(customOptions) {
    this.options = { ...countdownDefaults, ...customOptions };
    if (is.string(this.options.date)) {
      this.options.date = new Date(this.options.date);
    }
  };

  render() {
    emptyElement(this.el);
    const data = this.getDiffDate();
    this.el.append(...this.partManager.parts(data));
  };

  /**
   * Restart the countdown with new date
   * @param {Date} newDate
   * @return {Countdown}
   */
  restart(newDate) {
    this.#update(newDate);
    this.interval = false;
    this.#init();
    return this;
  };

  /**
   * Restart the countdown and update options
   * @param {CountdownOptionTypes} customOptions
   */
  restartWithOptions(customOptions) {
    this.#mergeOptions(customOptions);
    this.interval = false;
    this.#init();
    return this;
  };

  /**
   * Stop the countdown refresh / rerender
   * @return {Countdown} Countdown instance
   */
  #stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = false;
    }
    return this;
  };

  /**
   * Update the end date of the countdown
   * @param  {Date} newDate Date object or a String/Number that can be passed to the Date constructor
   * @return {Countdown} Countdown instance
   */
  #update(newDate) {
    if (typeof newDate !== 'object') {
      this.options.date = new Date(newDate);
    }
    this.options.date = newDate;
    this.render();
    return this;
  };

  /**
   * Update the offset
   * @param  {Number} offset New offset in ms
   * @return {Countdown} Countdown instance
   */
  updateOffset(offset) {
    this.options.offset = offset;
    return this;
  };
}

export default Countdown;
