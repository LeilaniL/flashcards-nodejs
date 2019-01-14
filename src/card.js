export class Card {

    constructor(word, definition) {
      this.word = word;
      this.definiton = definition;
      this.time = 10;
    }
  
    setTimer() {
        setInterval(() => {
            this.time--;
        }, 1000);        
    }

    didYouRunOutOfTime() {
      if (this.time > 0) {
        return false;
      } else {
        return true;
      }
    }

    testAnswer(userAnswer){
      if (this.word===userAnswer){
        return true;
      } else {
        return false;
      }
    }
  }