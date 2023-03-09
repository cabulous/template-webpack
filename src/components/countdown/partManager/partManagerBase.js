import is from '../../../utils/is';
import { keepZeroPartConstants } from './constants';
import optionDefaults from './optionDefaults';

class PartManagerBase {

  /**
   * @param {StylerBase} styler
   * @param {PartManagerOptionTypes} options
   * @return {HTMLElement[]}
   */
  constructor(styler, options = {}) {
    this.styler = styler;

    /**
     * @type {PartManagerOptionTypes}
     */
    this.options = {
      ...optionDefaults,
      ...options,
    };
  }

  /**
   * @param {CountdownDiffTypes} data
   * @return {HTMLElement[]}
   */
  parts(data) {
    switch (this.options.keepZeroPart) {
      case keepZeroPartConstants.NO_ZERO_PART:
        return this.partsWithoutZero(data);
      case keepZeroPartConstants.HOUR:
        return this.partsKeepZeroUpToHour(data);
      case keepZeroPartConstants.MIN:
        return this.partsKeepZeroUpToMin(data);
      default:
        throw new Error(
          `unknown keepZeroPart option: ${this.options.keepZeroPart}`,
        );
    }
  }

  partsWithoutZero(data) {
    if (!is.zero(data.days)) {
      return this.uptoDay(data);
    }

    if (!is.zero(data.hours)) {
      return this.uptoHour(data);
    }

    if (!is.zero(data.min)) {
      return this.uptoMin(data);
    }

    return this.uptoSec(data);
  }

  /**
   * @param {CountdownDiffTypes} data
   * @return {HTMLElement[]}
   */
  partsKeepZeroUpToMin(data) {
    if (!is.zero(data.days)) {
      return this.uptoDay(data);
    }

    if (!is.zero(data.hours)) {
      return this.uptoHour(data);
    }

    return this.uptoMin(data);
  }

  /**
   * @param {CountdownDiffTypes} data
   * @return {HTMLElement[]}
   */
  partsKeepZeroUpToHour(data) {
    if (!is.zero(data.days)) {
      return this.uptoDay(data);
    }
    return this.uptoHour(data);
  }

  /**
   * @abstract
   * @param {CountdownDiffTypes} data
   * @return {HTMLElement[]}
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  uptoDay(data) {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @param {CountdownDiffTypes} data
   * @return {HTMLElement[]}
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  uptoHour(data) {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @param {CountdownDiffTypes} data
   * @return {HTMLElement[]}
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  uptoMin(data) {
    throw new Error('implement it in the sub class');
  }

  /**
   * @abstract
   * @param {CountdownDiffTypes} data
   * @return {HTMLElement[]}
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  uptoSec(data) {
    throw new Error('implement it in the sub class');
  }
}

export default PartManagerBase;
