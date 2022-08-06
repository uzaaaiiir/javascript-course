'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// CHAINED METHODS -- Each method returns a value used by the next method
const eurToUSD = 1.1;
const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  //   .map((mov, i, arr) => {
  //     console.log(arr);
  //     return mov * eurToUSD;
  //   })
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInUSD);
