const assert = require('chai').assert;
const flatten = require('../flatten');

describe('flatten', () => {
  it('should return a single-level array if given a nested array', () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.sameDeepOrderedMembers(actual, expected);
  });
});