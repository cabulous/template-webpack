import Time from './time';

describe('time utils', () => {

  test('get hours', () => {
    expect(Time.remainingHours(10000)).toBe(2);
  });

  test('get minutes', () => {
    expect(Time.remainingMinutes(10000)).toBe(46);
  });

  test('get seconds', () => {
    expect(Time.remainingSeconds(10000)).toBe(40);
  });

});
