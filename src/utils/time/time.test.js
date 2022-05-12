import Time from './time';

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

});
