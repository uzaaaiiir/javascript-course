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

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

for (const hours of Object.values(restaurant.openingHours)) {
  console.log(hours);
}

for (const property in restaurant) {
  console.log(property);
}

// object.keys

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Object.values
const values = Object.values(restaurant.openingHours);
console.log(values);

// Object.entries
const entries = Object.entries(restaurant.openingHours);
// returns property and values
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`${key}: opens at ${open} and closes at ${close}`);
}
