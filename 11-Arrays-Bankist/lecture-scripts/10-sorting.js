'use strict';

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // mutates original array
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort()); // sorting is done based on strings

// return less than 0, a will be before b -- keep order
// return greater than 0, b will be before a -- switch order of a and b

// ascending
movements.sort((a, b) => {
  return a > b ? 1 : -1; // same as (a - b)
});
console.log(movements);

// descending
movements.sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log(movements);

movements.sort((a, b) => a - b); // ascending
console.log(movements);
movements.sort((a, b) => b - a); // descending
console.log(movements);
