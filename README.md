# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lilyhabbs/lotide`

**Require it:**

`const _ = require('@lilyhabbs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element in an array
* `tail(array)`: Returns all elements in an array, except for the first element
* `middle(array)`: Returns the middle element of an array
* `flatten(array)`: Flattens a nested array into a single-level array 
* `countOnly(allItems, itemsToCount)`: Counts elements of an array based on specified values
* `countLetters(string)`: Returns a count of each letter in a string 
* `letterPositions(string)`: Returns all the indices in a string where each character is found 
* `findKeyByValue(object, value)`: Returns the first key of an object containing a given value 
* `without()`: Filters data from an array by removing unwanted items
* `map(array, callback)`: Executes a function on every element of an array
* `takeUntil(array, callback)`: Returns the elements of an array until the condition of the callback function is met