// returns elements of an array until the condition of the callback function is met
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