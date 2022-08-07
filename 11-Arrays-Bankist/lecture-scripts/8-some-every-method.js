'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// EQUALITY
console.log(movements.includes(-130));

// SOME METHOD
// Checks if there exists any deposits that meet the condition
const anyDeposits = movements.some(mov => mov > 0);
const anyDepositsAbove3000 = movements.some(mov => mov > 3000);
console.log(anyDeposits);
console.log(anyDepositsAbove3000);

// EVERY METHOD
// Returns true if all elements in the array satisfy the condition
const positiveMovements = [430, 1000, 700, 50, 90];
console.log(movements.every(mov => mov > 0));
console.log(positiveMovements.every(mov => mov > 0));

// Separate Callback function
const deposit = mov => mov > 0;
console.log(positiveMovements.some(deposit));
console.log(movements.every(deposit));
console.log(positiveMovements.filter(deposit));
