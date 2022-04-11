'use strict';

const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelection('btn--hold');

const score0El = document.querySelector('#score--0');
//Don't need to use #
const score1El = document.getElementById('score--1');

let p1score = 0;
let p2score = 0;
let number = 0;

rollDice.addEventListener('click', diceRoll);
