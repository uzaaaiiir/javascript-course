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
  // Destructuring objects as a parameter
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with: ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sle, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sle, 21',
});
*/

//////////////////////////
// Destructuring Objects
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restarantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restarantName, hours, tags);

// Menu is not in the object -- used default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let f = 111;
let g = 999;
const obj = { f: 23, g: 7, h: 14 };
({ f, g } = obj);
console.log(f, g);

// Nested Objects
const {
  fri: { open: ab, close: cd },
} = openingHours;
console.log(open, close);
console.log(ab, cd);
*/

////////////////////////
//Destructuring Array
// Destructuring allows breaking down object properties of array values into distinct variables
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructured Array
const [x, y, z] = arr;
const [d, ...rest] = arr;
console.log(d, rest);
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// console.log(restaurant.categories);

// Destructures the array and switches the names
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Destructures array into variables
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [k, , [n, o]] = nested;
console.log(k, n, o);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/////////////////////////////////
// SPREAD OPERATOR
/*
const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
const goodnewArr = [1, 2, ...arr1];
console.log(badNewArr, '\n', goodnewArr);
console.log(...goodnewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(...newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays
const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu1);

// Iterables: arrays, strings, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(...letters);

// Real World Examples
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(...ingredients);
restaurant.orderPasta(...ingredients);

// Spread on Objects
const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Copy Objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

////////////////////////
// REST PATTERN -- does the opposite of the spread operator

// Destructuring
const arr = [1, 2, ...[3, 4]]; // Expands the array b/c on the right side
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(arr);
console.log(a, b, rest);

const [pizza, , resotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, resotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // console.log(d3.sum(numbers));
  console.log(sum);
  return sum;
};

const x = [23, 5, 7];
console.log(...x);
add(...x);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
