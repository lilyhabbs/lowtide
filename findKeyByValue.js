const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  // loop through object and return first key that contains given value
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

// TEST CASES
const bestTVShowsByGenre = { 
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama:  'The Wire',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const cars = { 
  Toyota: 'Corolla',
  Honda: 'Civic',
  Ford:  'Fusion',
  Volkswagen: 'Jetta'
};

assertEqual(findKeyByValue(cars, 'Civic'), 'Honda');
assertEqual(findKeyByValue(cars, 'Elantra'), undefined);