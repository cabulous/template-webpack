import Time from './time';
import { expect } from '@jest/globals';

describe('time utils', () => {

  test('get hours', () => {
    expect(Time.getHours(10000)).toBe(2);
  });

  test('get minutes', () => {
    expect(Time.getMinutes(10000)).toBe(46);
  });

  test('get seconds', () => {
    expect(Time.getSeconds(10000)).toBe(40);
  });

  test('format time with colon separator', () => {
    expect(Time.formatTime(10000)).toBe('2:46:40');
  });

  test('format time with inverted mark', () => {
    expect(Time.formatTime(10000, false, true)).toBe('-2:46:40');
  });

  test('format time with hours when hour is zero', () => {
    expect(Time.formatTime(999, true)).toBe('0:16:39');
  });

  test('do not add leading zeros', () => {
    expect(Time.addLeadingZeros(66, 2)).toBe('66');
  });

  test('add leading zeros', () => {
    expect(Time.addLeadingZeros(6, 3)).toBe('006');
  });

  test('is expired', () => {
    const now = new Date(5000);
    expect(Time.isExpired(1000, 4000, now)).toBeTruthy();
  });

  test('is not expired', () => {
    const now = new Date(4999);
    expect(Time.isExpired(1000, 4000, now)).toBeFalsy();
  });

});
