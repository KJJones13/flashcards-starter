const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess) {
    this.turns++;
    let turn = new Turn(guess, this.deck.cards[0])
    if(turn.evaluateGuess() == true) {
      return turn.giveFeedBack();
    } else {
      this.incorrectGuesses.push(turn.returnCard().id);
      return turn.giveFeedBack();
    }
  }
  calculatePercentCorrect() {
    let percentCorrect = this.incorrectGuesses.length / this.turns;
    return percentCorrect * 100;
  }
}

module.exports = Round;
