/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const resetButton = document.querySelector('#btn__reset');
resetButton.addEventListener('click', () =>{
    game = new Game();
    game.startGame();
})

