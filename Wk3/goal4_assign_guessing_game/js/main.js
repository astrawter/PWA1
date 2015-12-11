/**
 * GUESSING GAME:
 *
 * Created By: Alexandria
 * Date: 11/10/15
 *
 * GUESSING GAME
 */

//Game variables
(function (){
var count = 0;
var maxGuess = 3;

//Create a variable to store a random integer within the range 1-10.
var answer = Math.floor((Math.random()*10)+1);
console.log(answer);

//Create variables that reference the DOM(html) elements or 1 object literal.
var dom = {
    input: document.querySelector("#input"),
    output: document.querySelector("#output"),
    button: document.querySelector("button")
};
console.log(dom);

//Create an .addEventListner event listener on the guess button to listen for a click event.

    dom.button.onclick = function(e){

//Create a function to validate the users input:

    var playersGuess = parseInt(dom.input.value);
//Validate that a number was entered
    if(isNaN(playersGuess)){
        dom.output.innerHTML = 'Please enter a number';
//Validate that the number entered is between 1 and 10
    }else if(playersGuess < 1){
        dom.output.innerHTML = 'Please enter a number between 1-10';
    }else if(playersGuess > 10){
        dom.output.innerHTML = 'Please enter a number between 1-10';
//If your guess is lower than the computer's number then display appropriate message in the HTML.
    }else if(playersGuess < answer){
        dom.output.innerHTML = 'Your guess is too low';
//If your guess is higher than the computer's number then display appropriate message in the HTML.
    }else if(playersGuess > answer){
        dom.output.innerHTML = 'Your guess is too high';
//If your guess is equal to the computer's number then display appropriate message and end the game.
    }else if(playersGuess = answer){
        dom.output.innerHTML = 'Your guess is right!';
    }
        console.log(playersGuess);
       // var validateInput = function(){

            e.preventDefault();
            return false;
        };



//Tally all the wrong guesses and end the game after the 3rd incorrect guess and show appropriate game over message in the HTML.
//Deactivate the button by removing the event listener when the game is over.
    for(i = 0, j = 3; i < j; i++){
        if(i === j){
            dom.button.removeEventListener;
        };
        console.log(i);
    };




})();

/*



 When the guess button is clicked, evaluate your guess with the number the computer has chosen.







 EXTRA CREDIT: Use a keyboard event for the ENTER button that also acts like clicking on the guess button.
 */


