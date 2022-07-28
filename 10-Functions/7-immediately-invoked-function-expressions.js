'use strict';

/** IMMEDIATELY INVOKED FUNCTION EXPRESIONS
 * -- In JS, sometimes need a function that is executed once and then disappears
 * -- Creating a function once, and only running it once doesn't stop us from running it again
 * -- Want to execute the function immediately and not save it
 * -- Do this by wrapping a function() block in parantheses
 */

const runOnce = function () {
  console.log('This will never run again!');
};
// Doesn't stop us from calling the function again
runOnce();

// Immediately Invoked Function Expression
// All data declared in the function has a private scope and the data is encapsulated in that scope
(function () {
  console.log('This will never run again! (IIFE)');
  // Not accessible outside the function
  const isPrivate = 23;
})();

(() => console.log('This will ALSO never run again! (IIFE Arrow)'))();

// variables declared with let/const create their own scope inside a block
{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate); // 46
console.log(isPrivate); // get Error -- not defined
