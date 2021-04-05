const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('countOnly', () => {
  it('should return counts for given items only', () => {
    const actual = countOnly([
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe',
    ], { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false });
    const expected = {
      Jason: 1,
      Fang: 2,
    };
    assert.deepEqual(actual, expected);
  });
});