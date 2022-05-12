import Time from './time';

describe('time utils', () => {

  test('get hours', () => {
    expect(Time.hours(10000)).toBe(2);
  });

});
