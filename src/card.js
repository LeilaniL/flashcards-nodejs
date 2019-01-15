import $ from 'jquery';

let cardWords = ["javascript", "webpack", "javascript"];
let cardDefinitions = ["language we're learning now", "a module bundler used instead of Gulp.js or Grunt.js", "language we're learning now(repeat)"];
let interval; 

export class Card {

  constructor(word, definition) {
    this.word = word;
    this.definition = definition;
    this.time = 10;
  }

  static cardCreater(x) {
    let newCard = new Card(cardWords[x], cardDefinitions[x]);
    return newCard;
  }

  setTimer() {
      interval = setInterval(() => {
          this.time--;
          $("#timer").text(`Time Remaining: ${this.time}`);
      }, 1000);        
  }

  clearTimer() {
      clearInterval(interval);
  }

  timesUp() {
    if (this.time > 0) {
      return false;
    } else {
      return true;
    }
  }

  testAnswer(userAnswer) {
    if (this.word === userAnswer) {
      return true;
    } else {
      return false;
    }
  }
}


