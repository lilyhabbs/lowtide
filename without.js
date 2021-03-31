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

const without = (source, itemsToRemove) => {
  const result = [];
  
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      result.push(source[i]);
    }
  }

  return result;
};

// TEST CASES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without(['hello', 'goodbye'], []), ['hello', 'goodbye']);
assertArraysEqual(without([], ['Lighthouse', 'Labs']), []);

// TEST CASE: Make sure originally array was not changed
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);