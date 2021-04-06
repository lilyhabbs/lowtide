const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('takeUntil', () => {
  it('should return all values until the callback returns a truthy value', () => {
    const actual = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0);
    const expected = [1, 2, 5, 7, 2];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return the entire array if the callback condition is not met', () => {
    const actual = takeUntil(['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'], x => x === '.');
    const expected = ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return an empty array if the first element meets the callback condition', () => {
    const actual = takeUntil([3 > 5, 4 < 25, 5 !== '5'], equation => !equation);
    const expected = [];
    assert.sameDeepOrderedMembers(actual, expected);
  });
});