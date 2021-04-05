const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Check the returned array elements
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

// Check the returned array elements for empty array
assertEqual(tail([]).length, 0);

// Check the returned array elements for an array with one element
assertEqual(tail(['Hello']).length, 0);

// Check if original array has not been modified
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);