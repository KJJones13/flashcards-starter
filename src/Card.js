class Card {
  constructor(num, question, answers,correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.id = 1;
  }
  getCorrectAnswer() {
    return this.correctAnswer;
  }
}


module.exports = Card;
