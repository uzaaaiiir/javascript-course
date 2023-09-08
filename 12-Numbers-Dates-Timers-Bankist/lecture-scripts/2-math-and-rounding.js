'use strict';

// Root
console.log(Math.sqrt(25));
console.log(Math.sqrt('25'));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Max Value
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23 Type Coercion
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

// Min Value
console.log(Math.min(5, 18, 23, 11, 2)); // NaN

// Constants
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random Number
console.log(Math.trunc(Math.random() * 6) + 1); // integer between 1 and 6

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) => min...(max - min + min) -> min...max
console.log(randomInt(10, 20));

// Rounding integers

console.log(Math.round(23.3)); // rounds to nearest integer = 23
console.log(Math.round(23.9)); // rounds to nearest integer = 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.4)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23
console.log(Math.floor(-23.9)); // -24

console.log(Math.trunc(23.3)); // removes decimals = 23
console.log(Math.trunc(-23.3)); // removes decimals = 23

// Rounding Decimals
// toFixed() returns a string representing a decimal
// primitives dont have methods -- boxing will occur to call the method on the object
console.log((2.7).toFixed(0)); // "3"
console.log((2.7).toFixed(3)); // "2.700"
console.log((2.345).toFixed(2)); // "2.35"
console.log(+(2.345).toFixed(2)); // 2.25

// Remainder Operator
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2); // 0
console.log(6 / 2); // 3 - No Remainder

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));
