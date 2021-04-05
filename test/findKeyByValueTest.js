const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue', () => {
  it('should return first key that contains given value', () => {
    const actual = findKeyByValue({
      sciFi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama:  'The Wire',
    }, 'The Wire');
    const expected = 'drama';
    assert.strictEqual(actual, expected);
  });

  it('should return undefined if the given value does not exist', () => {
    const actual = findKeyByValue({
      Toyota: 'Corolla',
      Honda: 'Civic',
      Ford:  'Fusion',
      Volkswagen: 'Jetta'
    }, 'Elantra');
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});