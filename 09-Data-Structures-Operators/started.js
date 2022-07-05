'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
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

/** SPREAD OPERATOR
 * -- Allows us to copy all or part of an interable into another array, object as individual elements
 * -- Unpacks an array
 

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(...arr); // Takes all the elements out, and spreads them
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const wholeMenuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenuCopy);

// Iterables: arrays strings, maps, sets, NOT objects
const str = 'Uzair';
const letters = [...str, 'S'];

// const ingredients = [prompt("Let's make Pasta! Ingredient 1? "),prompt('Ingredient 2?'),prompt('Ingredient 3?')];
// console.log(ingredients);

// Unpacks the array when passing into the method
restaurant.orderPasta(...ingredients);

const newRestaurant = { founder: 'Uzair', foundedIn: 2012, ...restaurant };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/************************** */

/** DESTRUCTURING
 * -- Allows unpacking values from arrays & properties from objects into distinct variables
 */

/** DESTRUCTURING OBJECTS
 * -- Unpacking properties of objects into distinct variables
 * -- Use curly braces b/c this is how we create objects
 * -- Example: const {name, hours, categories} = restaurant;
 

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// Destructuring the object within the method
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Assigning names
const {
  name: restaurantName,
  categories: tags,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, tags, hours);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

*/

/*********************** */

/** DESTRUCTURING ARRAYS
 * -- Unpacks values of array into individual variables
 * -- Does not alter the original array
 * -- Use Square brackets b/c this is how we define arrays
 * -- Example: const [i, j] = [1, 2];
 
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // Get i = 2 and j = [5,6]
const [i, , [j, k]] = nested; // Get i = 2, j = 5, k = 6
console.log(i, j, k);

// Default Values in an array
const [p = 0, q = 1, r = 2] = [8, 9];
console.log(p, q, r);
*/
