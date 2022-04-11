'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
//Don't need to use #
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('.hidden');

let p1score = 0;
let p2score = 0;
let number = 0;

rollDice.addEventListener('click', diceRoll);
