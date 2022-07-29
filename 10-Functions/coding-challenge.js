'use strict';

/** CODING CHALLENGE #1
 *
 * A poll has a question, an array of options from which people can choose,
 * and an array with the number of replies for each option. This data is
 * stored in the starter object.
 *
 */

const poll = {
  question: 'What is your favourite programming language?',
  options: [
    '0: JavaScript',
    '1: Python',
    '2: Rust',
    '3: C++',
    '4: Java',
    '5: Other',
  ],
  numberOfReplies: new Array(6).fill(0),
  registerNewAnswer() {
    let promptStr = `${this.question}\n${this.options.join(
      '\n'
    )}\n(Write option number)`;
    const result = Number(prompt(promptStr));

    if (typeof result !== 'number') {
      alert('Not a number!');
    } else if (result > 6 || result < 0) {
      alert('No a valid value!');
    } else {
      this.numberOfReplies[Number(result)]++;
    }

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    console.log(
      type === 'string'
        ? `Poll results are value ${this.numberOfReplies.join(' ')}.`
        : this.numberOfReplies
    );
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ numberOfReplies: [5, 2, 3] });
poll.displayResults.call({ numberOfReplies: [5, 2, 3] }, 'string');
poll.displayResults.call({ numberOfReplies: [1, 5, 3, 2, 9, 6] }, 'string');

/** CODING CHALLENGE 2 */
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
