'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

// forEach is a higher-order function accepting a callback function
//  (value, index, arr) are the potential paramenters of the callback function
// Can loop over using each value
// CANNOT break out of a foreach loop -- cannot use continue or break statements
console.log('-------FOREACH-------');
movements.forEach(function (value, index, arr) {
  if (value > 0) {
    console.log(`Movement ${index + 1} - Deposited: ${value}`);
  } else {
    console.log(`Movement ${index + 1} - Withdrew: ${Math.abs(value)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
// The callback function tells for higher-order function what to do on each iteration

/** FOR EACH ON MAPS AND SETS */

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`); // no keys in sets b/c cannot index over sets
  // key is the same as value
  // prints: USD: USD, etc.
});
