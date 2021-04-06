const assert = require('chai').assert;
const map = require('../map');

describe('map', () => {
  it('should return the names with a last name appended', () => {
    const actual = map(['John', 'Jane', 'Mary', 'Joe'], firstName => `${firstName} Doe`);
    const expected = ['John Doe', 'Jane Doe', 'Mary Doe', 'Joe Doe'];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return the numbers with 10 added', () => {
    const actual = map([4, 91, 13, 321, 50, 1941], number => number += 10);
    const expected = [14, 101, 23, 331, 60, 1951];
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should return true if the word is less than 5, otherwise returns false', () => {
    const actual = map(['rabbit', 'cat', 'dog', 'snake', 'fish'], pet => pet.length < 5);
    const expected = [false, true, true, false, true];
    assert.sameDeepOrderedMembers(actual, expected);
  });
});