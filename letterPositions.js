// return all the indices in the string where each character is found
const letterPositions = string => {

  const results = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;