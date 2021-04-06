const assert = require('chai').assert;
const without = require('../without');

describe('without', () => {
  it('should return an array with the itemToRemove removed', () => {
    const actual = without([1, 2, 3], [1]);
    const expected = [2, 3];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return the original array, if the itemsToRemove array is empty', () => {
    const actual = without(['hello', 'goodbye'], []);
    const expected = ['hello', 'goodbye'];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return an empty array if the intial array is empty', () => {
    const actual = without([], ['Lighthouse', 'Labs']);
    const expected = [];
    assert.sameDeepOrderedMembers(actual, expected);
  });
});