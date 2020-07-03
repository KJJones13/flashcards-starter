const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Card(1, 'What is Kyle\'s favorite animal',['whale', 'snake', 'wolf'], 'wolf');
    const turn = new Turn('wolf', card);
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const card = new Card(1, 'What is Kyle\'s favorite animal',['whale', 'snake', 'wolf'], 'wolf');
    const turn = new Turn('wolf', card);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have two arguments', function() {
    const card = new Card(1, 'What is Kyle\'s favorite animal',['whale', 'snake', 'wolf'], 'wolf');
    const turn = new Turn('wolf', card);
    let currentGuess = turn.returnGuess();
    expect(currentGuess).to.equal('wolf');
  });

  it('should have a method to return the card', function() {
    const card = new Card(1,'What is Kyle\'s favorite animal',['whale', 'snake', 'wolf'], 'wolf');
    const turn = new Turn('whale', card);
    let currentCard = turn.returnCard();
    expect(currentCard).to.equal(card);
  });

  it('should check the user guess', function() {
    const card = new Card(1,'What is Kyle\'s favorite animal',['whale', 'snake', 'wolf'], 'wolf');
    const turn = new Turn('whale', card, 'wolf', 0);
    let userGuess = turn.evaluateGuess();
    expect(turn.guess).to.equal('whale');
  });

  it('should give the user feedback', function() {
    const card = new Card(1,'What is Kyle\'s favorite animal',['whale', 'snake', 'wolf'], 'wolf');
    const turn = new Turn('whale', card);
    let userFeedback = turn.giveFeedBack();
    expect(userFeedback).to.equal('incorrect');
  });
});
