const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// return an array with only the middle element(s) of a given array
const middle = array => {
  let middleNum = [];

  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleNum.push(Math.trunc(array.length / 2), Math.trunc(array.length / 2) + 1);
    } else {
      middleNum.push(Math.trunc(array.length / 2) + 1);
    }
  }

  return middleNum;
};

module.exports = middle;