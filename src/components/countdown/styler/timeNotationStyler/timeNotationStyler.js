import './timeNotationStyler.scss';

import { createElement, toggleClass } from '../../../../utils/elements';
import is from '../../../../utils/is';
import StylerBase from '../stylerBase';
import classnames from './classnames';

class TimeNotationStyler extends StylerBase {

  /**
   * @param {StylerOptionTypes} [options]
   */
  constructor(options = {}) {
    super(options);

    if (is.nullOrUndefined(options.timeNotation)) {
      throw new Error('expect a time notation param but got null');
    }
  }

  renderDays(days) {
    const digit = this.createDigitContainer(days);
    const notation = this.createDayNotationContainer(this.dayNotation(days));
    const container = this.createDayContainer();
    container.append(digit, notation);
    this.setStylerClassname(container);
    return container;
  }

  renderHours(hours) {
    const digit = this.createDigitContainer(hours);
    const notation = this.createHourNotationContainer(this.hourNotation(hours));
    const container = this.createHourContainer();
    container.append(digit, notation);
    this.setStylerClassname(container);
    return container;
  }

  renderMins(mins) {
    const digit = this.createDigitContainer(mins);
    const notation = this.createMinNotationContainer(this.minNotation(mins));
    const container = this.createMinContainer();
    container.append(digit, notation);
    this.setStylerClassname(container);
    return container;
  }

  renderSecs(secs) {
    const digit = this.createDigitContainer(secs);
    const notation = this.createSecNotationContainer(this.secNotation(secs));
    const container = this.createSecContainer();
    container.append(digit, notation);
    this.setStylerClassname(container);
    return container;
  }

  /**
   * @param {string} notation
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createDayNotationContainer(notation) {
    return createElement('span', {
      class: `${classnames.notation} ${classnames.notationType.day}`,
    }, notation);
  }

  /**
   * @param {string} notation
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createHourNotationContainer(notation) {
    return createElement('span', {
      class: `${classnames.notation} ${classnames.notationType.hour}`,
    }, notation);
  }

  /**
   * @param {string} notation
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createMinNotationContainer(notation) {
    return createElement('span', {
      class: `${classnames.notation} ${classnames.notationType.min}`,
    }, notation);
  }

  /**
   * @param {string} notation
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createSecNotationContainer(notation) {
    return createElement('span', {
      class: `${classnames.notation} ${classnames.notationType.sec}`,
    }, notation);
  }

  /**
   * @param {number|string} days
   */
  dayNotation(days) {
    if (days >= 2) {
      return this.options.timeNotation.days;
    }
    return this.options.timeNotation.day;
  }

  /**
   * @param {number|string} hours
   */
  hourNotation(hours) {
    if (hours >= 2) {
      return this.options.timeNotation.hours;
    }
    return this.options.timeNotation.hour;
  }

  /**
   * @param {number|string} mins
   */
  minNotation(mins) {
    if (mins >= 2) {
      return this.options.timeNotation.minutes;
    }
    return this.options.timeNotation.minute;
  }

  /**
   * @param {number|string} secs
   */
  secNotation(secs) {
    if (secs >= 2) {
      return this.options.timeNotation.seconds;
    }
    return this.options.timeNotation.second;
  }

  /**
   * @param {HTMLElement} container
   */
  // eslint-disable-next-line class-methods-use-this
  setStylerClassname(container) {
    toggleClass(container, classnames.stylerType, true);
  }
}

export default TimeNotationStyler;
