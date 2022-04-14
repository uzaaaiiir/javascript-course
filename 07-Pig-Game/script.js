'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
//Don't need to use # for getElementById
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// select players
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
// Don't need to use .hidden -- just hidden
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a Random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1; if true switch to next player
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore; //Change later
  } else {
    //   switch to next player
  }
});
