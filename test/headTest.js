const assert = require('chai').assert;
const head = require('../head');

describe('head', () => {
  it('should return the first element of an array', () => {
    const actual = head([1, 2, 3]);
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should return the single element for an array with one element', () => {
    const actual = head(['5']);
    const expected = '5';
    assert.strictEqual(actual, expected);
  });

  it('should return undefined for an empty array', () => {
    const actual = head([]);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});