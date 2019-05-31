import FlappyBird from "./game";

document.addEventListener("DOMContentLoaded", function(){
    const Game = require('./game.js');
    let canvasEl = document.getElementById("bird-game");
    new FlappyBird(canvasEl);
})


