import { Card } from './card.js';
let x = 0;


export class Game {

  constructor(userName) {
    this.userName = userName;
    this.cardNumber = 0;
    this.newCard = Card.cardCreater(this.cardNumber);
    this.time = 10;
    this.score = 0;
    this.interval = null;
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
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
        console.log("Set Timer:" + this.time);
      } else {
        this.score--;
      }
    }, 1000);
  }

  clearTimer() {
    console.log(this.interval);
    clearInterval(this.interval);
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
    if (this.score >=2) {
      this.clearTimer();
      return true;
    } else {
      return false;
    }
    
  }


}