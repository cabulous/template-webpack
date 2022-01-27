import { isDebugOn } from '../settings/env';

const LOG_PREFIX = '[App Name]';
const noop = () => {};

class Logger {
  constructor() {
    this.enabled = window.console && isDebugOn();
  }

  get log() {
    return this.enabled
      // eslint-disable-next-line no-console
           ? Function.prototype.bind.call(console.log, console, LOG_PREFIX)
           : noop;
  }

  get warn() {
    return this.enabled
      // eslint-disable-next-line no-console
           ? Function.prototype.bind.call(console.warn, console, LOG_PREFIX)
           : noop;
  }

  get error() {
    return this.enabled
      // eslint-disable-next-line no-console
           ? Function.prototype.bind.call(console.error, console, LOG_PREFIX)
           : noop;
  }
}

export default Logger;
