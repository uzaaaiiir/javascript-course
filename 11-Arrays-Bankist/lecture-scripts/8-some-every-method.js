'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// EQUALITY
console.log(movements.includes(-130));

// Checks if there exists any deposits that meet the condition
const anyDeposits = movements.some(mov => mov > 0);
const anyDepositsAbove3000 = movements.some(mov => mov > 3000);
console.log(anyDeposits);
console.log(anyDepositsAbove3000);
