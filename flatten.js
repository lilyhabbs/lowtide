// flatten a nested array into a single-level array
const flatten = array => {
  const flatArr = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      for (const innerElement of element) {
        flatArr.push(innerElement);
      }
    } else {
      flatArr.push(element);
    }
  }

  return flatArr;
};

module.exports = flatten;