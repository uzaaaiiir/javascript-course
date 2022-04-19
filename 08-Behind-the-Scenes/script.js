'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  //console.log(firstName); // Global variable available in function scope

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}.`;
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Uzair';
calcAge(1999);
// console.log(age); // Function Scopes variable -- inaccessible outside calcAge function
