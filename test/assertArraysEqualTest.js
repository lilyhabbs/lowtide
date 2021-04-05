const assertArraysEqual = require('../assertArraysEqual');

// Check the returned array elements
console.log('PASS EXPECTED:');
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['Hello', 2, 3], ['Hello', 2, 3]);
assertArraysEqual(['Lighthouse', 'Labs'], ['Lighthouse', 'Labs']);
assertArraysEqual([], []);

console.log('FAIL EXPECTED:');
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([3, 2, 1], [2, 3, 1]);
assertArraysEqual(['Lighthouse', 'Labs', null], ['Lighthouse', 'Labs']);