const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', () => {
  it('should return an empty array if array has one element', () => {
    const actual = middle([1]);
    const expected = [];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return an empty array if array has two elements', () => {
    const actual = middle([1, 2]);
    const expected = [];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return one middle element if array has odd number of elements', () => {
    const actual = middle([1, 2, 3, 4, 5]);
    const expected = [3];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return two middle elements if array has even number of elements', () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.sameDeepOrderedMembers(actual, expected);
  });
});