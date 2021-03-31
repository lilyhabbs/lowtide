// tests code to compare if actual result matches expected result
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// returns all elements in an array, except for the head (first item)
const tail = array => array.slice(1);

// TEST CASE: Check the returned array elements
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

// TEST CASE: Check the returned array elements for empty array
const resultEmpty = tail([]);
assertEqual(resultEmpty.length, 0);

// TEST CASE: Check the returned array elements for an array with one element
const resultOne = tail([]);
assertEqual(resultOne.length, 0);

// TEST CASE: Check if original array has not been modified
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);