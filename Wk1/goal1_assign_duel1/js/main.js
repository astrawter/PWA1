/*
Alexandria Strawter
11/26/2015
Assignment Goal 1: Duel 1
*/

//Insert self executing function
(function(){
    
/*Create three variables for each player of the two players. Player’s name, health, and damage*/

//Spiderman's name ,health, and damage
var playerOneName = "SPIDERMAN";
var playerOneHealth = 100;
var playerOneDamage = 20;

//Batman's name ,health, and damage
var playerTwoName = "BATMAN";
var playerTwoHealth = 100;
var playerTwoDamage = 20;

//Rounds
var round = 0;


/*fight function loops through each round and reduces players health based on a randomly generated number*/
function fight(){
    alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" +     playerTwoHealth); 
    
        //loops the function until 10 rounds
    for (var i = 0; i < 10; i++){ 
        
        //formula to get a min damage for player 1 and player 2
        var minDamage1 = playerOneDamage * .5;
        var minDamage2 = playerTwoDamage * .5;
        
        //formula to get a random number damage for player 1 and player 2
        var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2) + minDamage2);
        
        //subtract random damage from players health
        playerOneHealth -= f1;
        playerTwoHealth -= f2;
        
    //pulls results from the winnerCheck function
   var results = winnerCheck();

   if (results === "no winner"){
       
       //round is incremented
       round++;
       
       //alerts player the score after each round
       alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " +  playerTwoName + ":" +     playerTwoHealth);  
   }else{
       
       //if there is a winner or tie displays results
       alert(results);
       
       //breaks out of the FOR loop to declare winner
       break;  
     };
   };
};
    
//Checks for a winner after every round 
function winnerCheck(){
    
    //default result is no winner
    var result = "no winner";
    
    //if both players health becomes 0 or less there is a TIE
    if (playerOneHealth < 1 && playerTwoHealth <1 ){
        result = "You Both Die";
        
    //if one player's health reaches 0 or less they are the  LOSER  
    }else if(playerOneHealth<1){
        result = playerTwoName + " WINS!!!"
    }else if(playerTwoHealth<1){
        result = playerOneName + " WINS!!!"
    };
    
    //returns results to fight function
    return result;
};

// Begins program
fight();
    
//end self executing function 
})();