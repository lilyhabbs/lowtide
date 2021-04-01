const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  for (const key in obj) {
    console.log(obj[key]);
    if (callback(obj[key])) {
      return key;
    }
  }
};

// TEST CASES

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({
  "John":   { loggedIn: false },
  "Kim":    { loggedIn: false },
  "Jason":  { loggedIn: false },
  "Kelly":  { loggedIn: true },
  "Joe":    { loggedIn: false },
  "Kyla":   { loggedIn: true }
}, student => student.loggedIn), 'Kelly');

assertEqual(findKey({
  "John":   { loggedIn: false },
  "Kim":    { loggedIn: false },
  "Jason":  { loggedIn: false },
  "Kelly":  { loggedIn: false },
  "Joe":    { loggedIn: false },
  "Kyla":   { loggedIn: false }
}, student => student.loggedIn), undefined);