const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', () => {
  it('should return all elements in an array, except for the first item', () => {
    const actual = tail(['Hello', 'Lighthouse', 'Labs']);
    const expected = ['Lighthouse', 'Labs'];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return an empty array for an array with one element', () => {
    const actual = tail(['Lighthouse']);
    const expected = [];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return an empty array for an empty array', () => {
    const actual = tail([]);
    const expected = [];
    assert.sameDeepOrderedMembers(actual, expected);
  });
});