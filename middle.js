function eqArrays(array1, array2) {
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

const middle = function(array) {
  // return an array with only the middle element(s) of a given array
  let middleNum = [];

  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleNum.push(Math.trunc(array.length / 2));
      middleNum.push(Math.trunc(array.length / 2) + 1);
    } else {
      middleNum.push(Math.trunc(array.length / 2) + 1);
    }
  }
  return middleNum;
};

// TEST CASE: For arrays with one or two elements, return empty array
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// TEST CASE: For arrays with odd number of elements, return a single middle element
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// TEST CASE: For arrays with even number of elements, return two middle elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);