const han = new Hangman("cat", 2);
const puzEl = document.querySelector("#puzzle");
const remainingGuessEl = document.querySelector("#remainingGuesses");

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  han.makeGuess(guess);
  console.log(han.getPuzzle());
  console.log(han.remainingGuesses);
  puzEl.textContent = han.getPuzzle();
  han.getStatus();
  console.log(han.status);
  remainingGuessEl.textContent = han.remainingGuesses;
});
