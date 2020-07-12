class Card {
  constructor(num, question, answers,correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.id = num;
  }
  getCorrectAnswer() {
    return this.correctAnswer;
  }
}

module.exports = Card;
