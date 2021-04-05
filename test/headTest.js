const assertEqual = require('../assertEqual');
const head = require('../head');

// Check the returned array elements
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');

// Check if array with only one element yields that element
assertEqual(head([1]), 1);

// Check if empty array yields undefined
assertEqual(head([]), undefined);