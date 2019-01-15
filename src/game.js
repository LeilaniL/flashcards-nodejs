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

  timeOut() {
    this.score--;
    this.time=10;
    this.cardNumber++;
    this.newCard = Card.cardCreater(this.cardNumber);
  }
  
  setTimer() {
    interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
        console.log("Set Timer:" + this.time);
      } else {
        this.score--;
      }
    }, 1000);
  }

  clearTimer() {
    clearInterval(interval);
    console.log("timer cleared");
  }




  checkCard (userAnswer) {
  let isCorrect = this.newCard.testAnswer(userAnswer);
  if (isCorrect === true) {
      this.raiseScore();
      this.cardNumber++;
      this.newCard = Card.cardCreater(this.cardNumber);
      this.time=10;
      return "Correct! New Score is ";
      
  }
  else {
      this.score--;
      this.cardNumber++;
      this.newCard = Card.cardCreater(this.cardNumber);
      this.time=10;
      return "Incorrect! New Score is ";
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