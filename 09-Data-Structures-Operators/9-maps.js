'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/** MAPS
 * -- Maps are used to map values to keys
 * -- Data is stored in key, value pairs in maps
 * -- the keys can have any data type in maps
 *  -- in objects, the keys are always strings
 *  -- Allows for more complex data types
 */

// Create Map using new Map()
const rest = new Map();

// Set is used to create key value pairs
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
// Can chain the set method together to continue to set values
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// get is used to retrive the value corresponding to a key
console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// Other Map Methods
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

// returns undefined if we use rest.get[1,2] b/c this array and the one set are two different arrays
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get[arr]);

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// Anotehr way to create a map is to pass an array containing arrays of key value pairs
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'Python'],
  ['correct', 3],
  [true, 'Correct 👏'],
  [false, 'Try again!'],
]);
console.log(question);

// Object.entries() also returns key, value pairs in an array [key, value]
console.log(Object.entries(restaurant.openingHours));
// Can convert from Objects to Maps
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

/** ITERATING OVER MAPS  */
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer:'));
const answer = 3;
console.log(
  `${question.get(
    answer === question.get('correct')
  )} The answer is ${question.get('correct')}.`
);

// Convert Map to Array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log([...question.values()]);
