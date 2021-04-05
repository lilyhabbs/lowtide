// return an array with only the middle element(s) of a given array
const middle = array => {
  let middleNum = [];

  if (array.length > 2) {
    if (array.length % 2 === 0) {
      const mid1 = Math.trunc(array.length / 2);
      const mid2 = Math.trunc(array.length / 2) + 1;
      middleNum.push(mid1, mid2);
    } else {
      middleNum.push(Math.trunc(array.length / 2) + 1);
    }
  }

  return middleNum;
};

module.exports = middle;