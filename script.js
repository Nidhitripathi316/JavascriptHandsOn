'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct seceretNumber!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
// let seceretNumber = Math.trunc(Math.random() * 20) + 1;
let seceretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //if sceret number is not provided
  if (!guess) {
    // document.querySelector('.message').textContent = '🤬 No number!';
    displayMessage('🤬 No number!');
  }
  //if sceret number is correct
  else if (guess === seceretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = seceretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is not equal to sceret number
  else if (guess !== seceretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > seceretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > seceretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
    }
  }
  //if sceret number is high
  //   else if (guess > seceretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //     }
  //     //if sceret number is low
  //   } else if (guess < seceretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //     }
  //   }
});
//click of again button
const againButton = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    seceretNumber = generateRandomNumber();
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
