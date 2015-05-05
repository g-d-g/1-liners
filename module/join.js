/**
 * @module 1-liners/join
 * 
 * @desc Same as `[1, 'liners'].join('-')`
 * 
 * @example
 * 
 * 	var join = require('1-liners/join');
 * 
 * 	join('-', [1, 'liners']); // => '1-liners'
 * 
 */
export default (superglue, arr) => arr.join(superglue);
