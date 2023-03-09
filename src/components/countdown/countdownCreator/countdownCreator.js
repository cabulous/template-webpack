import is from '../../../utils/is';
import Countdown from '../countdown';
import PartManagerCreator
  from '../partManager/partManagerCreator/partManagerCreator';
import StylerCreator from '../styler/stylerCreator/stylerCreator';
import countdownCreatorOptionDefaults from './defaults';

class CountdownCreator {

  /**
   * @param {HTMLElement} element
   * @param {CountdownCreatorOptionTypes} [options]
   * @return {Countdown}
   */
  static create(element, options = {}) {

    /**
     * @type {CountdownCreatorOptionTypes}
     */
    const mergedOptions = {
      ...countdownCreatorOptionDefaults,
      ...options,
    };

    const styler = StylerCreator.create(mergedOptions.styler, {
      isLeadingZero: mergedOptions.isLeadingZero,
      timeNotation: mergedOptions.timeNotation,
    });

    const partManager = PartManagerCreator.create(
      mergedOptions.specification, styler, {
        keepZeroPart: mergedOptions.keepZeroPart,
      },
    );

    const countdownOptions = CountdownCreator.getCountdownOptions(options);

    return new Countdown(
      element,
      partManager,
      countdownOptions,
    );
  }

  /**
   * @param {CountdownCreatorOptionTypes} creatorOptions
   * @return {CountdownOptionTypes}
   */
  static getCountdownOptions(creatorOptions) {
    const res = {};
    if (!is.nullOrUndefined(creatorOptions.date)) {
      res.date = creatorOptions.date;
    }
    if (!is.nullOrUndefined(creatorOptions.refresh)) {
      res.refresh = creatorOptions.refresh;
    }
    if (!is.nullOrUndefined(creatorOptions.offset)) {
      res.offset = creatorOptions.offset;
    }
    if (!is.nullOrUndefined(creatorOptions.onEnd)) {
      res.onEnd = creatorOptions.onEnd;
    }
    return res;
  }
}

export default CountdownCreator;
