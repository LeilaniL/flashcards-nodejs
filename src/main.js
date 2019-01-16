
import $ from 'jquery';
import { Game } from './game';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


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
                    if(newGame.didYouWinGame() === true) {
                        $(".img").show();
                        $.ajax({
                                url: `https://api.giphy.com/v1/stickers/random?api_key=eA4oR2RUdVtaS1l8xJ1UtQaJs6JeItIz&tag=&rating=PG&limit=1`,
                                type: 'GET',
                                data: {
                                  format: 'json'
                                },
                                success: function (response) {
                                  document.getElementById("test").src = response.data.images.original.url;
                            
                                
                                },
                                error: function () {
                                  $('#errors').text("There was an error processing your request. Please try again.");
                                }
                              });
                    }
                    showNewCard();
                })
            }

        showNewCard();
           

    

    });
});
