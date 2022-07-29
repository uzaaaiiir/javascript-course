/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Arrays are objects and we have access to methods we can apply to arrays

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE -- returns new array, original array unaffected
console.log(arr.slice(2));
console.log(arr.slice(0, 3));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // creates shallow copy
console.log([...arr]); // spread also creates shallow copy

// SPLICE -- mutates original array; extracted from original array
// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log(arr.splice(-1)); //['b']
console.log(arr.splice(1, 2)); // 2nd parameter is number of elements you want to delete
console.log(arr); // ['a'] remaining in original array

// REVERSE -- mutates original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT -- concatenates two arrays, does not mutate original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN -- joins items in an array as a String
console.log(letters.join('-'));

// ES22 AT Method

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(2)); // replaces indexing with at method

// getting last item of array
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));
console.log(arr3.at(-2));

console.log('Uzair'.at(0));
console.log('Uzair'.at(3));
console.log('Uzair'.at(-1));
