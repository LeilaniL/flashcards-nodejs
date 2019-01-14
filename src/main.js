
import $ from 'jquery';
import { Card } from './card';
import { Game } from './game';

$(document).ready(function () {

    $("#userForm").submit(function (event) {
        event.preventDefault();
        const userName = $('#userName').val();

        let newGame = new Game(userName);

    })
});
