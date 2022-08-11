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

// 1. Adding Recommended Food portion
dogs.forEach(dog => (dog.recFood = Math.pow(dog.weight, 0.75) * 28));
console.log(dogs);

// 2. Find if Sarah's dog eats too much
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarahs dog eats too ${
    sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'
  }!`
);

// 3. Array of all owners who eat too much & too little
const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
  (owns, dog) => {
    const eatsTooMuchOrLittle =
      dog.curFood > dog.recFood ? 'ownersEatTooMuch' : 'ownersEatTooLittle';
    owns[eatsTooMuchOrLittle].push(dog.owners);
    owns[eatsTooMuchOrLittle] = owns[eatsTooMuchOrLittle].flat();
    return owns;
  },
  { ownersEatTooMuch: [], ownersEatTooLittle: [] }
);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4. Log Strings to the Conole
// Matila and Alice and Bob's dogs eat too much!
// Sarah and John and Michael's dogs eat too little!
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log any dog eating EXACTLY the amount of food recommended
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6. Log any dog eating an OKAY amount of food
// current > (recommended * 0.9) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7. Filter out dogs eating an ok amount
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);

// 8. Create copy of dogs array and sory by recommended food portion
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
