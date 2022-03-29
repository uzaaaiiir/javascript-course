"use strict";

const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} degrees Celsius in ${i + 1} days`);
  }
};

console.log(printForecast(t1));
console.log(printForecast(t2));
11;
