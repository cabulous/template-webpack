import { beforeEach, describe, expect, test } from '@jest/globals';

import timeNotationMockData from '../../__mock__/timeNotationMockData';
import TimeNotationStyler from './timeNotationStyler';

describe('time notation styler', () => {
  let styler;

  beforeEach(() => {
    styler = new TimeNotationStyler({ timeNotation: timeNotationMockData });
  });

  test('day notation: plural', () => {
    expect(styler.dayNotation(2)).toBe(timeNotationMockData.days);
  });

  test('day notation: singular', () => {
    expect(styler.dayNotation(1)).toBe(timeNotationMockData.day);
  });

  test('hour notation: plural', () => {
    expect(styler.hourNotation(2)).toBe(timeNotationMockData.hours);
  });

  test('hour notation: singular', () => {
    expect(styler.hourNotation(1)).toBe(timeNotationMockData.hour);
  });

  test('minute notation: plural', () => {
    expect(styler.minNotation(2)).toBe(timeNotationMockData.minutes);
  });

  test('minute notation: singular', () => {
    expect(styler.minNotation(1)).toBe(timeNotationMockData.minute);
  });

  test('second notation: plural', () => {
    expect(styler.secNotation(2)).toBe(timeNotationMockData.seconds);
  });

  test('second notation: singular', () => {
    expect(styler.secNotation(1)).toBe(timeNotationMockData.second);
  });
});
