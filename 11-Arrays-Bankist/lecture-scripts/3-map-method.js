'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// MAP METHOD
const movementsUSDArr = movements.map((mov, i) => mov * eurToUsd);
const movementUSDFuncExp = movements.map(function (mov, i) {
  return mov * eurToUsd;
});

// FOR-OF LOOP
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}

console.log(movementsUSDArr);
console.log(movementUSDFuncExp);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1} You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } $${Math.abs(mov)}`;
});
console.log(movementsDescriptions);
