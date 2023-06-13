'use strict';

// Select the element to mainupulate as follow

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Handling the button

let score = 20;
let highscore = 0;
// Generate random number
let secnumber = Math.trunc(Math.random() * 20 + 1);

// it works when an event happened
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no input given
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  // When guess the right number
  else if (guess === secnumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secnumber;
    // Mainupulating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When number is wrong
  else if (guess !== secnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secnumber ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When number is too low
  //   else if (guess < secnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Starting Game...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
