// the deceleration of the hangman
const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split(""); // converting the word to an array of characters
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = []; // an array of the guessed characters
};
// a method that returns the current solution of the puzzle
Hangman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });
  return puzzle;
};
// a method that makes a guess
Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(letter);
  }
  if (isUnique && isBadGuess) {
    this.remainingGuess--;
  }
};
