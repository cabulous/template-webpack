/**
 * @typedef {Object} CountdownOptionTypes
 * @property {number | string | Date} date
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
 */

/**
 * @typedef {Object} TimeNotationTypes
 * @property {string} day
 * @property {string} days
 * @property {string} hour
 * @property {string} hours
 * @property {string} minute
 * @property {string} minutes
 * @property {string} second
 * @property {string} seconds
 */
