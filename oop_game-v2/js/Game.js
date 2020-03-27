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

     checkForWin(){
        
        const phraseLetters = document.querySelectorAll('.letter');

        phraseLetters.forEach( matchedLetter => {
            if( matchedLetter.className.includes('hide')){
                return false;
            } else {
                return true;
            }
        })

        
     }

     gameOver(){}
 }