// return all the indices in the string where each character is found
const letterPositions = str => {

  const results = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;