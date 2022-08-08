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

// CODING CHALLENGE 3
const averageHumanAgeOfDogs2 = function (dogAges) {
  return dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(dogAge => dogAge >= 18)
    .reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);
};

console.log(averageHumanAgeOfDogs(testData1));
console.log(averageHumanAgeOfDogs(testData2));
console.log(averageHumanAgeOfDogs2(testData1));
console.log(averageHumanAgeOfDogs2(testData2));

// CODING CHALLENGE 4
console.log('-------------------------------------------');

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Adding Recommended Food portion
dogs.forEach(dog => (dog.recommended = Math.pow(dog.weight, 0.75) * 28));
console.log(dogs);

// Find if Sarah's dog eats too much
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  sarahDog.curFood > sarahDog.recommended
    ? 'Sarahs dog eats too much!'
    : 'Sarahs dog eats too little!'
);

// 3.
const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
  (owns, dog) => {
    const eatsTooMuchOrLittle =
      dog.curFood > dog.recommended ? 'ownersEatTooMuch' : 'ownersEatTooLittle';
    owns[eatsTooMuchOrLittle].push(dog.owners);
    owns[eatsTooMuchOrLittle] = owns[eatsTooMuchOrLittle].flat();
    return owns;
  },
  { ownersEatTooMuch: [], ownersEatTooLittle: [] }
);
console.log(ownersEatTooMuch, ownersEatTooLittle);

const eatsTooMuch = `dogs eat too much!`;
