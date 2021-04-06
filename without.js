// filters data by removing unwanted items
const without = (source, itemsToRemove) => {
  const result = [];
  
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      result.push(source[i]);
    }
  }

  return result;
};

module.exports = without;