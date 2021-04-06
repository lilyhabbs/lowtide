// allItems: an array of strings
// itemsToCount: an object specifying what to count within the array
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;