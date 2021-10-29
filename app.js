const han = new Hangman("chat me", 2);
const puzEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
puzEl.textContent = han.puzzle;
guessesEl.textContent = han.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  han.makeGuess(guess);
  puzEl.textContent = han.puzzle;
  han.getStatus();
  guessesEl.textContent = han.statusMessage;
});
