

let cardWords = ["javascript", "webpack", "javascript"];
let cardDefinitions = ["language we're learning now", "a module bundler used instead of Gulp.js or Grunt.js", "language we're learning now(repeat)"];
let interval; 

export class Card {

  constructor(word, definition) {
    this.word = word;
    this.definition = definition;
  }

  static cardCreater(x) {
    let newCard = new Card(cardWords[x], cardDefinitions[x]);
    return newCard;
  }

  testAnswer(userAnswer) {
    if (this.word === userAnswer) {
      return true;
    } else {
      return false;
    }
  }
}






