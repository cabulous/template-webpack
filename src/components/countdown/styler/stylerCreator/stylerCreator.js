import ColonStyler from '../colonStyler/colonStyler';
import TimeNotationStyler from '../timeNotationStyler/timeNotationStyler';
import { stylerTypeConstants } from './constants';

class StylerCreator {

  /**
   * @param type
   * @param {StylerOptionTypes} options
   * @return {StylerBase}
   */
  static create(type, options = {}) {
    switch (type) {
      case stylerTypeConstants.COLON:
        return new ColonStyler(options);
      case stylerTypeConstants.NOTATION:
        return new TimeNotationStyler(options);
      default:
        throw new Error(`unknown countdown styler type: ${type}`);
    }
  }
}

export default StylerCreator;
