'use strict';
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //getElementByID is a little bit faster, can be also used
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.brn--hold ');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0]; //this are the finals scores
let currentScore = 0;
let activePlayer = 0; //we store the scores of both players in an array;player is 0
//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  //1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. Display the diece
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check for a rolled 1: if true, switch to next player
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore; //change later with the current player
  } else {
    //switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active'); //check if the class is there; will remove it if it is here
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  //1. Add current score to active player's score
  //2. Check if player's score is >=100
  //Switch to next player
});
