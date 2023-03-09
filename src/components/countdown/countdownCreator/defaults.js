import { keepZeroPartConstants } from '../partManager/constants';
import {
  specificationTypeConstants,
} from '../partManager/partManagerCreator/constants';
import { stylerTypeConstants } from '../styler/stylerCreator/constants';

/**
 * @type {CountdownCreatorOptionTypes}
 */
const countdownCreatorOptionDefaults = {
  styler: stylerTypeConstants.COLON,
  specification: specificationTypeConstants.SEC,
  keepZeroPart: keepZeroPartConstants.NO_ZERO_PART,
  isLeadingZero: false,
  timeNotation: {
    day: 'day',
    days: 'days',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    second: 'second',
    seconds: 'seconds',
  },
  date: new Date(),
};

export default countdownCreatorOptionDefaults;
