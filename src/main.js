
import $ from 'jquery';
import { Card } from './card';
import { Game } from './game';


$(document).ready(function () {

    $("#userForm").submit(function (event) {
        event.preventDefault();
        const userName = $('#userName').val();
        let newGame = new Game(userName);
        let x = 0;

        function answerFunction() {
            let newCard = Card.cardCreater(x);
            $("#card").text(newCard.definition);
            $("#answerForm").submit(function (event) {
                console.log("answerForm submitted");
                event.preventDefault();
                let userAnswer = $('#answer').val();
                console.log("userAnswer: " + userAnswer);
                console.log("x:" + x);
                let isCorrect = newCard.testAnswer(userAnswer);
                if (isCorrect === true) {
                    console.log('correct answer');
                    newGame.raiseScore();
                    console.log(`new score is ${newGame.score}`);
                    x++;
                    answerFunction();
                }
                else if (isCorrect === false) {
                    console.log('incorrect answer');
                    newGame.lowerScore();
                    console.log(`new score is ${newGame.score}`);
                    x++;
                    answerFunction();
                }
                else {
                    return;
                }

                console.log(x)
            })
        }

        answerFunction();





        // let flashcards = function () {
        //initialize new card, print definition


        //print time to time div every second and lower score if time's up
        // let interval;
        // let time = 10;
        // function countdown() {
        //     interval = setInterval(() => {
        //         time-=1;
        //         $("#timer").text(time);
        //         if (time <= 0) {
        //             console.log('times up');
        //             clearInterval(interval);
        //             newGame.lowerScore();
        //             x+=1;
        //             console.log(`new score is ${newGame.score}`)
        //         }

        //     }, 1000);
        // }

        // countdown();

        // setTimeout(() => {
        //     console.log("I timed out");
        //     clearInterval(interval);
        // }, 10001);
        // function addToX() {
        //     console.log(x);
        //     newCard.word = cardAnswers[x];
        //     newCard.definition = cardDefinitions[x];
        //     $("#card").text(newCard.definition);
        // }
        // $("button#test").click(addToX());

        // })
        // })
        // let userAnswer = $('#answer').val();
        // let isCorrect = newCard.testAnswer(userAnswer);
        // if (isCorrect === true) {
        //     console.log('correct answer');
        //     newGame.raiseScore();
        //     console.log(`new score is ${newGame.score}`);
        //     x++;
        //     //clearInterval(interval);
        // }
        // else {
        //     console.log('incorrect answer');
        //     newGame.lowerScore();
        //     x++;
        //     //clearInterval(interval);
        // }

    })
})