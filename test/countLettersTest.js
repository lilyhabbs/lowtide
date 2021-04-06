const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('countLetters', () => {
  it('should return an object with the counts of each letter in the string', () => {
    const actual = countLetters('hello world');
    const expected = { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 };
    assert.deepEqual(actual, expected);
  });

  it('should throw an error if passed an empty string, undefined or null', () => {
    assert.throws(countLetters, 'Error');
  });  
});