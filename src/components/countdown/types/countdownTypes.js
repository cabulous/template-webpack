/**
 * @typedef {Object} CountdownOptionTypes
 * @property {number | string | Date} date
 * @property {TimeUnitTextTypes} [timeUnitText]
 * @property {styleConstants} [style]
 * @property {number} [refresh]
 * @property {number} [offset]
 * @property {Function} [onEnd]
 */

/**
 * @callback CountdownRenderFunction
 * @param {CountdownDiffTypes} data
 * @param {Element} el
 */

/**
 * @typedef {Object} CountdownDiffTypes
 * @property {number} years
 * @property {number} days
 * @property {number} hours
 * @property {number} min
 * @property {number} sec
 * @property {number} millisec
 *
 */
