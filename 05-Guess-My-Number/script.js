'use strict';

/*
const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const random = Math.trunc(Math.random() * 20) + 1;

const x = function () {
  console.log(document.querySelector('.guess').value);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //input is returned as a string
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  }
});
// document.querySelector('.check').addEventListener('click', x);
