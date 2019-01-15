import { Card } from './card.js';
let x = 0;
let interval;

export class Game {

  constructor(userName) {
    this.userName = userName;
    this.cardNumber = 0;
    this.newCard = Card.cardCreater(this.cardNumber);
    this.time = 10;
    this.score = 0;
  }

  raiseScore() {
    return this.score++;
  }

  lowerScore() {
    return this.score--;
  }
  setTimer() {
    interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        this.score--;
      }
    }, 1000);
  }

  clearTimer() {
    clearInterval(interval);
  }

  checkCard (userAnswer) {
  let answerResult = "";
  let isCorrect = this.newCard.testAnswer(userAnswer);
  if (isCorrect === true) {
      this.raiseScore();
      this.cardNumber++;
      this.clearTimer();
      this.newCard = Card.cardCreater(this.cardNumber);
      return answerResult = "Correct! New Score is ";
  }
  else {
      this.lowerScore();
      this.cardNumber++;
      this.clearTimer();
      this.newCard = Card.cardCreater(this.cardNumber);
      return answerResult = "Incorrect! New Score is ";
  }
}

  didYouWinGame() {
    if (this.score > 10) {
      return true;
    } else {
      return false;
    }
  }


}