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
             new Phrase('construction'),
             new Phrase('instruction'),
             new Phrase('assignment'),
             new Phrase('instantiate'),
             new Phrase('indicate')
        ];
         return createPhrase;
     }


     startGame(){
   
         const overlay = document.querySelector('#overlay');
         const selectedPhrase = this.getRandomPhrase();
         
         overlay.style.display = 'none';

         selectedPhrase.addPhraseToDisplay();

         this.activePhrase = selectedPhrase;

     }


     getRandomPhrase(){

         return this.phrases[Math.floor(Math.random() * this.phrases.length)];

     }


     handleInteraction(){}

     
     removeLife(){

        this.missed += 1;
        const scoreboard = document.querySelector('#scoreboard ol');
        const life = document.querySelector('.tries');

        scoreboard.removeChild(life);

        if( this.missed === 5 ){
            this.gameOver();
        }

        console.log( this.missed );
        console.log( scoreboard );
        console.log( life );
     }


     checkForWin(){

        const matchedLetters = document.querySelectorAll('.show');
        const matched = matchedLetters.length;
        const givenPhrase = this.activePhrase.phrase.length;

        if( matched === givenPhrase ){
            return true;
        } else {
            return false;
        }
        
     }

     gameOver(){
         
     }
 }