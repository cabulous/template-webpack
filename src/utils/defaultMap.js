import is from './is';

class DefaultMap extends Map {

  /**
   * @param {Function} getDefaultValue
   * @param {*} mapConstructorArgs
   */
  constructor(getDefaultValue, ...mapConstructorArgs) {
    super(mapConstructorArgs);

    if (!is.function(getDefaultValue)) {
      throw new Error('getDefaultValue must be a function');
    }

    this.getDefaultValue = getDefaultValue;
  }

  /**
   * @param {*} key
   * @return {*}
   */
  get(key) {
    if (!this.has(key)) {
      this.set(key, this.getDefaultValue(key));
    }
    return super.get(key);
  }

}

export default DefaultMap;
