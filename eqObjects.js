const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key1 in object1) {
      for (const key2 in object2) {
        if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
          return eqArrays(object1[key1], object2[key2]);
        } else if (key2 === key1 && object1[key1] !== object2[key2]) {
          return false;
        }
      }
    }
  }
  return true;
};

//TEST CASES

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const ab2 = { a: "1", b: "2" };
const ba2 = { b: "3", a: "1" };
assertEqual(eqObjects(ab2, ba2), false);

const ab3 = { c: "1", b: "2" };
const ba3 = { b: "3", a: "1" };
assertEqual(eqObjects(ab3, ba3), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);