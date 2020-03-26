/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         this.phrase = phrase;
     }

     addPhraseToDisplay(){

         const phraseDiv = document.querySelector('#phrase ul');
         const split = this.phrase.split("");

         split.forEach( character => {
            const li = document.createElement('li');
            phraseDiv.appendChild(li);
            li.textContent = character;

             if( character === " "){
                li.className = 'space';
             } else {
                li.className = `hide letter ${character}`;
             }
         });
     }

     checkLetter(){

        const key = document.querySelector('#qwerty');
        key.addEventListener('click', (e) => {
            if( this.phrase === e.target){
                console.log("true");
            } else {
                console.log("false");
            }
        });
     }

     showMatchedLtter(){

     }
 }