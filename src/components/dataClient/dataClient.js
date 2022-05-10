import { getLogger } from '../logger';

class DataClient {
  constructor(data) {
    this.logger = getLogger();
    this.data = data;

    this.#init();
  }

  #init() {
    if (!this.validate) {
      return;
    }

  }

  /**
   * @return boolean
   */
  get validate() {
    return true;
  }
}

export default DataClient;
