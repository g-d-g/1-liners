/**
 * @module 1-liners/property
 * 
 * @desc Same as `object.property`
 * 
 * @example
 * 
 * 	const property = require('1-liners/property');
 * 
 * 	const object = {foo: 1};
 * 
 * 	property('foo', object);  // => 1
 * 
 */
export default (property, object) => object[property];
