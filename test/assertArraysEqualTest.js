const assertArraysEqual = require('../assertArraysEqual');

// Check the returned array elements
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['Hello', 2, 3], ['Hello', 2, 3]);
assertArraysEqual(['Lighthouse', 'Labs'], ['Lighthouse', 'Labs']);
assertArraysEqual([], []);