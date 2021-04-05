const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('letterPositions', () => {
  it('should return all the indices in the string where each character is found', () => {
    const actual = letterPositions('hello');
    const expected = { h: [0], e: [1], l: [2, 3], o: [4],};
    assert.deepEqual(actual, expected);
  });

  it('should return one index if the string contains the given character once', () => {
    const actual = letterPositions('hello').e;
    const expected = [1];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return multiple indices if the string contains the given character more than once', () => {
    const actual = letterPositions('hello there').e;
    const expected = [1, 8, 10];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return undefined if the string doesn\'t contain the given character', () => {
    const actual = letterPositions('hello there').j;
    const expected = undefined;
    assert.deepEqual(actual, expected);
  });
});