import SpecificToHourPartManager from '../impl/specificToHourPartManager';
import SpecificToMinPartManager from '../impl/specificToMinPartManager';
import SpecificToSecPartManager from '../impl/specificToSecPartManager';
import { specificationTypeConstants } from './constants';

class PartManagerCreator {

  /**
   * @param {specificationTypeConstants} specificationType
   * @param {StylerBase} styler
   * @param {PartManagerOptionTypes} options
   */
  static create(specificationType, styler, options = {}) {
    switch (specificationType) {
      case specificationTypeConstants.SEC:
        return new SpecificToSecPartManager(styler, options);
      case specificationTypeConstants.MIN:
        return new SpecificToMinPartManager(styler, options);
      case specificationTypeConstants.HOUR:
        return new SpecificToHourPartManager(styler, options);
      default:
        throw new Error(
          `unknown specification type to create a countdown part manager: ${specificationType}`,
        );
    }
  }
}

export default PartManagerCreator;
