import is from '../utils/is';

export function isDebugOn() {
  testEnv();
  return process.env.DEBUG;
}

export function isDevEnv() {
  testEnv();
  return process.env.NODE_ENV === 'development';
}

export function isStagingEnv() {
  testEnv();
  return process.env.NODE_ENV === 'staging';
}

export function isProductEnv() {
  testEnv();
  return process.env.NODE_ENV === 'production';
}

export function testEnv() {
  if (is.nullOrUndefined(process.env.DEBUG)) {
    throw new Error('Missing the "process.DEBUG" variable in build env');
  }
  if (is.nullOrUndefined(process.env.NODE_ENV)) {
    throw new Error('Missing the "process.NODE_ENV" variable in build env');
  }
}
