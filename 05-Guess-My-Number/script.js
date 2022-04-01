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

//State variables - variables relevant to the state of our application
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

// document.querySelector('.number').textContent = secretNumber;

const x = function () {
  console.log(document.querySelector('.guess').value);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //input is returned as a string
  console.log(guess, typeof guess);

  // Invalid input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  }

  // Player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🙌 Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';
    // Need to use

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    highscore++;
    document.querySelector('.highscore').textContent = highscore;
  }

  // Guess too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // Guess too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// document.querySelector('.check').addEventListener('click', x);

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.backgroundColor = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
