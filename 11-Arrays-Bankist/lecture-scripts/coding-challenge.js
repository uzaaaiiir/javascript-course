'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaNew = dogsJulia.slice(1, dogsJulia.length - 2);

  const allDogs = [...dogsJuliaNew, ...dogsKate];

  allDogs.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(`Dog ${i + 1} is an adult, and is ${dogAge} years old.`);
    } else {
      console.log(`Dog ${i + 1} is still a puppy! 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [9, 16, 6, 8, 3]);
console.log('---------------------------------------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
