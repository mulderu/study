// http://victorjs.org/#rotatedeg
//
var Victor = require('./victor/build/victor.js');
var vec = new Victor(42, 1337);

console.log(vec.toString())
console.log(vec.angleDeg())
console.log("--------------");

var vec2 = vec.rotateDeg(45);
console.log(vec2.toString())
console.log(vec2.angleDeg())
console.log("--------------");


