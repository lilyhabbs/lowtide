const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// TEST CASES

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);

const numbers = [4, 91, 13, 321, 50, 1941];
const results2 = map(numbers, number => number += 10);
assertArraysEqual(results2, [14, 101, 23, 331, 60, 1951]);

const names = ['John', 'Jane', 'Mary', 'Joe'];
const results3 = map(names, firstName => `${firstName} Doe`);
assertArraysEqual(results3, ['John Doe', 'Jane Doe', 'Mary Doe', 'Joe Doe']);

const pets = ['rabbit', 'cat', 'dog', 'snake', 'fish'];
const results4 = map(pets, pet => pet.length < 5);
assertArraysEqual(results4, [false, true, true, false, true]);