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

const flatten = (array) => {
  const flatArr = [];

  // loop through array
  for (const elem of array) {
    if (Array.isArray(elem)) {
      // if the element is an array, loop through the elements of that array
      for (const innerElm of elem) {
        // push each of those inner elements into the new array
        flatArr.push(innerElm);
      }
    } else {
      // if element is not an array, push it into the new array
      flatArr.push(elem);
    }


  }

  return flatArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);