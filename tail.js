const assertEqual = require('./assertEqual');

// returns all elements in an array, except for the first item
const tail = array => array.slice(1);

module.exports = tail;