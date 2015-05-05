/**
 * @module 1-liners/equal
 * 
 * @desc Same as `a === b`.
 * 
 * @example
 * 
 * 	var equal = require('1-liners/equal');
 * 
 * 	equal(true, true); // => true
 * 	equal(false, true); // => false
 * 	equal(1, true); // => false
 * 
 */
export default (x, y) => x === y;
