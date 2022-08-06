'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// accumulator is like a snowball
// 2nd parameter of reduce method is the initial value of the acc
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

let sumBalance = 0;
for (const mov of movements) {
  sumBalance += mov;
}
console.log(sumBalance);

// Maximum Value
const maxValue = movements.reduce(
  (acc, mov) => (acc >= mov ? acc : mov),
  movements[0]
);

console.log(maxValue);
