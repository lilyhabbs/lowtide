// return a count of each of the letters in a given string
const countLetters = string => {
  if (!string) {
    // throw an error if string is falsy
    throw 'Error';
  }
  
  const counts = {};

  for (const char of string) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
};

module.exports = countLetters;