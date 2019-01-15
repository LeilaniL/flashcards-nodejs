
import $ from 'jquery';
import { Game } from './game';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function () {

    $("#userForm").submit(function (event) {
        event.preventDefault();
        const userName = $('#userName').val();
        let newGame = new Game(userName);


            let showNewCard = function() {
                // display card question
                $("#card").text(newGame.newCard.definition);
                //start timer
                newGame.setTimer();
                //print time to page
                setInterval(function(){
                    $("#timer").text(`Time Remaining: ${newGame.time}`);
                    if (newGame.time<=0){
                        newGame.timeOut();
                        $("#score").text(`Time's up!! New score is ${newGame.score}`);
                        newGame.clearTimer();
                        showNewCard();
                    }
                }, 1000);
            
                // submit and check answer
                $("#answerForm").submit(function (event) {
                    event.preventDefault();
                    let userAnswer = $('#answer').val();
                    $("#answerForm").off("submit")
                    let finalResult = newGame.checkCard(userAnswer);
                    newGame.clearTimer();
                    $("#score").text(finalResult + newGame.score);
                    showNewCard();
                })
            }

        showNewCard();
           

    

    });
});
    

            //     newGame.newCard.checkCard(userAnswer)

//                 // let isCorrect = newCard.testAnswer(userAnswer);
//                 // if (isCorrect === true) {
//                 //     newGame.raiseScore();
//                 //     $("#score").text(`Correct! new score is ${newGame.score}`);
//                 //     x++;
//                 //     newCard.clearTimer();
//                 //     answerFunction();
//                 // }
//                 // else {
//                 //     newGame.lowerScore();
//                 //     $("#score").text(`Incorrect :(  New score is ${newGame.score}`);
//                 //     x++;
//                 //     newCard.clearTimer();
//                 //     answerFunction();
//                 // }
//             })
//         }

//         answerFunction();





//         // let flashcards = function () {
//         //initialize new card, print definition


//         //print time to time div every second and lower score if time's up
//         // let interval;
//         // let time = 10;
//         // function countdown() {
//         //     interval = setInterval(() => {
//         //         time-=1;
//         //         $("#timer").text(time);
//         //         if (time <= 0) {
//         //             console.log('times up');
//         //             clearInterval(interval);
//         //             newGame.lowerScore();
//         //             x+=1;
//         //             console.log(`new score is ${newGame.score}`)
//         //         }

//         //     }, 1000);
//         // }

//         // countdown();

//         // setTimeout(() => {
//         //     console.log("I timed out");
//         //     clearInterval(interval);
//         // }, 10001);
//         // function addToX() {
//         //     console.log(x);
//         //     newCard.word = cardAnswers[x];
//         //     newCard.definition = cardDefinitions[x];
//         //     $("#card").text(newCard.definition);
//         // }
//         // $("button#test").click(addToX());

//         // })
//         // })
//         // let userAnswer = $('#answer').val();
//         // let isCorrect = newCard.testAnswer(userAnswer);
//         // if (isCorrect === true) {
//         //     console.log('correct answer');
//         //     newGame.raiseScore();
//         //     console.log(`new score is ${newGame.score}`);
//         //     x++;
//         //     //clearInterval(interval);
//         // }
//         // else {
//         //     console.log('incorrect answer');
//         //     newGame.lowerScore();
//         //     x++;
//         //     //clearInterval(interval);
//         // }

//     })