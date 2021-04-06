// return a slice of the array with elements taken from the beginning
const takeUntil = (array, callback) => {
  const results = [];

  for (const element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      break;
    }
  }

  return results;
};

module.exports = takeUntil;