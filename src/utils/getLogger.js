import Logger from '../components/logger';
import is from './is';

const LOGGER_NAME = 'FileTranslatorLogger';

/**
 * @return {Logger}
 */
// eslint-disable-next-line import/prefer-default-export
export function getLogger() {
  let logger = window[LOGGER_NAME];

  if (!is.nullOrUndefined(logger)) {
    return logger;
  }

  logger = new Logger();
  window[LOGGER_NAME] = logger;

  return logger;
}
