/*
Alexandria Strawter
12/01/2015
Assignment Goal 2: Duel 2
*/

//Insert self executing function
(function(){
    
/*Create three variables for each player of the two players. Player’s name, health, and damage*/

//Spiderman's name ,health, and damage

var playerOne = {name:"SPIDERMAN", health:100, damage:20};

//Batman's name ,health, and damage

var playerTwo = {name:"BATMAN", health:100, damage:20};

//Both fighter objects should be in an array

var fighters = [playerOne, playerTwo];

    
//Rounds
var round = 0;


//Replace the alerts with code that access the DOM(HTML) such as getElemetById and/or querySelector
/*fight function loops through each round and reduces players health based on a randomly generated number*/

function fight(){
    alert(playerOne.name + ":" + playerOne.health + " *START* " + playerTwo.name + ":" +     playerTwo.health);

        //loops the function until 10 rounds

     var start = docuument.getElementByClass('buttonblue');
    console.log(start);
    start.addEventListener('click', calc)

    var calc = function(){
        
        //formula to get a min damage for player 1 and player 2
        var minDamage1 = playerOne.damage * .5;
        var minDamage2 = playerTwo.damage * .5;
        
        //formula to get a random number damage for player 1 and player 2
        var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2) + minDamage2);
        
        //subtract random damage from players health
        playerOne.health -= f1;
        playerTwo.health -= f2;
        
    //pulls results from the winnerCheck function
   var results = winnerCheck();

   if (results === "no winner"){
       
       //round is incremented
       round++;
       
       //alerts player the score after each round
       //capture location of score bar
       var bar = document.querySelectorAll('#scores div')
       console.log(bar);

//Shows change in health Fighter's name and health at the top
       bar[0].innerHTML = 'Spiderman: ' + playerOne.health ;
       bar[1].innerHTML = playerTwo.health ;
       alert(playerOne.name + ":" + playerOne.health + " *ROUND " + round + " OVER* " +  playerTwo.name + ":" +     playerTwo.health);
   }else{
       
       //if there is a winner or tie displays results
       alert(results);
       
     };
   };
};

    
//Checks for a winner after every round 
function winnerCheck(){
    
    //default result is no winner
    var result = "no winner";
    
    //if both players health becomes 0 or less there is a TIE
    if (playerOne.health < 1 && playerTwo.health <1 ){
        result = "You Both Die";
        
    //if one player's health reaches 0 or less they are the  LOSER  
    }else if(playerOne.health<1){
        result = playerTwo.name + " WINS!!!"
    }else if(playerTwo.health<1){
        result = playerOne.name + " WINS!!!"
    };
    
    //returns results to fight function
    return result;
};

// Begins program
fight();
    
//end self executing function 
})();

