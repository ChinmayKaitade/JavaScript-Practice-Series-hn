let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

// previous guess number array
let prevGuess = [];

// attempts tried
let numGuess = 1;

// play game
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // validate number, number should not be less than 1 and more than 100
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a Number greater than 1");
  } else if (guess > 100) {
    alert("Please Enter a Number less than 100");
  } else {
    prevGuess.push(guess);
    // remaining guess attempt
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // checking guessed number is higher or lower value
  if (guess === randomNumber) {
    displayMessage(`Congratulations. You Guess the Correct Number`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess) {
  // display remaining guess
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // display message is Low or High
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // end of game
  userInput.value = "";
  userInput.setAttribute("disabled", "");

  // adding start button
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // reset the values and start the new game
  const newGameButton = document.querySelector("#newGame");
  // reset the values to default
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    // start the game
    playGame = true;
  });
}
