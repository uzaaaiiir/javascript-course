'use strict';

// All numbers are represented internally as floating point numbers in JS
console.log(23 === 23.0);

// Numbers are all stored in a 64-bit format -- 0s and 1s
// Difficult to represent fractions in binary
console.log(0.1 + 0.2); // floating point approximation
console.log(0.1 + 0.2 === 0.3);

// Converting from String to Number
console.log(Number('23'));
console.log(+'23'); //when + operator seen -- does type coercion

// Parsing
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e23')); // NaN
// Accepts radix as an argument - the base of the number we are usig
console.log(Number.parseInt('50p', 10)); // 50
console.log(Number.parseInt('110bin', 2)); //6

console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseInt('2.5rem')); // 2

// isNaN() - Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// isFinite() - Best way to check if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

// isInteger()
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
