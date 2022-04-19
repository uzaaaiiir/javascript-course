'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  //console.log(firstName); // Global variable available in function scope

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    } else {
      millenial = false;
      const firstName = 'John'; // separate firstName var that is block scoped
      const str = `You're not a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // const and let are block scoped and only available in the block they are created
    console.log(millenial); // var is function scoped not block scoped
    // add(2, 3);
  }

  printAge();

  return age;
}

const firstName = 'Uzair';
calcAge(1999);
// console.log(age); // Function Scopes variable -- inaccessible outside calcAge function
