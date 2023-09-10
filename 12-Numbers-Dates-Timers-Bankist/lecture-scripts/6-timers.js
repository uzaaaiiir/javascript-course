// Known as async js
// setTimeout - callback executes once after a timeout
setTimeout(() => console.log('Here is your pizza '), 3000);
console.log('Waiting...');

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  6000,
  ...ingredients
);

// clearTimeout
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval - executes repeatedly after an interval of time
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
