import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";


export class Game {

    constructor(userName) {
      this.userName = userName;
      this.score = 0;
    }
  
    raiseScore() {
      return this.score++;        
    }

    lowerScore() {
      return this.score--;
    }

    // play() {
    //   let x = 0;
    //   let newCard = Card.cardCreater(x);
    //   $("#card").text(newCard.definition);
    // }

    didYouWinGame() {
      if (this.score > 10) {
        return true;
      } else {
        return false;
      }
    }


  }