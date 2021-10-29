// the deceleration of the hangman
class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split(""); // converting the word to an array of characters
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = []; // an array of the guessed characters
    this.status = "playing";
  }
  // a method that returns the current solution of the puzzle
  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
  // return the current mode of the game
  getStatus() {
    let finished = this.word.every(
      (
        letter // returns true only if all array elements returned true
      ) => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  // a method that makes a guess
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);
    if (this.status != "playing") {
      return;
    }
    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
  }
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${
        this.word.join("").charAt(0).toUpperCase() + this.word.join("").slice(1)
      }" `;
    } else {
      return "Great Work! You guessed the word";
    }
  }
}
