/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrase();
         this.activePhrase = null;   
     }

     createPhrase(){

         const createPhrase = [
             new Phrase('change the world by being yourself'),
             new Phrase('every moment is a fresh beginning'),
             new Phrase('never regret anything that made you smile'),
             new Phrase('die with memories not dreams'),
             new Phrase('everything you can imagine is real')
        ];
         return createPhrase;
     }

     startGame(){
   
         const overlay = document.querySelector('#overlay');
         overlay.style.display = 'none';

         const selectedPhrase = this.getRandomPhrase();
         selectedPhrase.addPhraseToDisplay();
         this.activePhrase = selectedPhrase;

     }

     getRandomPhrase(){

         return this.phrases[Math.floor(Math.random() * this.phrases.length)];
         
     }

     handleInteraction(){}

     removeLife(){}

     checkForWin(){}

     gameOver(){}
 }