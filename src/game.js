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

    didYouWinGame() {
      if (this.score > 10) {
        return true;
      } else {
        return false;
      }
    }


  }