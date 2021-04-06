// executes a function on every element of an array
const map = (array, callback) => {
  const results = [];

  for (let element of array) {
    results.push(callback(element));
  }

  return results;
};

module.exports = map;