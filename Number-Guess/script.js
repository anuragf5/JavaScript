let userInput = document.getElementById("number");

let checkBtn = document.getElementById("submit");

let restartBtn = document.getElementById("restart");

let guessNumber = document.getElementById("guess_number");

let guessLeft = document.getElementById("guess_left");

let win = document.getElementById("win");

let lose = document.getElementById("lose");

let leftGuessed = 10;

let playGame = true;

let randomNumber;

checkBtn.onclick = function (e) {
  checkValidation();
  e.preventDefault();
};

function checkValidation() {
  if (userInput.value == "" || isNaN(userInput.value)) {
    alert("Please enter a valid number");
    return;
  } else {
    randomNumber = parseInt(Math.random() * 30 + 1);
    console.log(randomNumber);

    startGame(playGame);
  }
}

function startGame(playGame) {
  if (playGame == true) {
    gameWinLose();
  } else {
    alert("You don't have a permission to play game");
  }
}

function gameWinLose() {
  if (userInput.value == randomNumber) {
    alert("Congratulation! you win");
    win.innerHTML += 1;
    resetValues();
  } else if (userInput.value != randomNumber) {
    setValues();
  }
}

function setValues() {
  if (leftGuessed == 0) {
    setButtonStyles();
    return;
  }
  guessNumber.innerHTML += `${userInput.value} `;
  guessLeft.innerHTML = `${--leftGuessed}`;
  lose.innerHTML += 1;
}

function resetValues() {
  leftGuessed = 10;
  userInput.value = "";
  guessNumber.innerHTML = "";
  guessLeft.innerHTML = leftGuessed;
}

function setButtonStyles() {
  checkBtn.setAttribute("disabled", "disabled");
  checkBtn.style.backgroundColor = "#ddd";
  checkBtn.style.color = "#fff";
  restartBtn.setAttribute("enable", "enable");
  restartBtn.style.backgroundColor = "#007bff";
  restartBtn.style.color = "#fff";
}
