const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = string => {
  const counts = {};

  for (const char of string) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  console.log('counts:', counts);
  return counts;
};

// TEST CASES
const string = 'hello world';
const letters = countLetters(string);
assertEqual(letters['l'], 3);
assertEqual(letters['o'], 2);
assertEqual(letters['x'], undefined);