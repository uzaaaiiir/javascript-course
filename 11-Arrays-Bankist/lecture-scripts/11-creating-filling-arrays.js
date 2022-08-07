'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(new Array([1, 2, 3, 4, 5, 6, 7]));

const x = new Array(7); // empty array with 7 elements
// cannot use map
console.log(x);
console.log(x.map(() => 5));

// can use fill
// x.fill(1); // fills with 1s
// console.log(x);

// fills it at index 3
// x.fill(1, 3);
// console.log(x); // fills from index 3 to the end

// fills with 1s from index 3 to 5
// x.fill(1, 3, 5);
// console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from -- static method
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const diceRolls = Array.from({ length: 100 }, () =>
  Math.ceil(Math.random() * 6)
);
console.log(diceRolls);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );

  console.log(movementsUI);
});
