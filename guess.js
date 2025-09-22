const msg = document.getElementById("message");
const playAgainBtn = document.getElementById("playAgain");

function startGame() {
  const max = parseInt(prompt("Enter the maximum number:"), 10);
  if (isNaN(max) || max <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  const random = Math.floor(Math.random() * max) + 1;
  let attempts = 0;
  let guess = prompt(`Guess a number between 1 and ${max} (type 'quit' to exit):`);

  while (true) {
    if (guess === null || guess.toLowerCase() === "quit") {
      msg.textContent = "You quit the game. Bye!";
      break;
    }
    
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess)) {
      guess = prompt("Not a number! Try again:");
      continue;
    }
    attempts++;
    if (numGuess === random) {
      msg.textContent = `🎉 Correct! The number was ${random}. You took ${attempts} attempts.`;
      playAgainBtn.style.display = "inline-block";
      break;
    } else if (numGuess < random) {
      guess = prompt("Too small! Try again:");
    } else {
      guess = prompt("Too large! Try again:");
    }
  }
}
playAgainBtn.addEventListener("click", () => {
  location.reload();
});
startGame();
