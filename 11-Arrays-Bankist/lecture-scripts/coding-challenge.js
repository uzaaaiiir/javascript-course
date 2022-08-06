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

// CODING CHALLENGE 2
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const averageHumanAgeOfDogs = function (dogAges) {
  const humanAgeOfDogs = dogAges.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  const adultDogs = humanAgeOfDogs.filter(dogAge => dogAge >= 18);

  const average =
    adultDogs.reduce((acc, dogAge) => acc + dogAge, 0) / adultDogs.length;

  return average;
};

console.log(averageHumanAgeOfDogs(testData1));
console.log(averageHumanAgeOfDogs(testData2));
