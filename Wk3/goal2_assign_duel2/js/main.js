/*
Alexandria Strawter
12/01/2015
Assignment Goal 2: Duel 2
*/

//Insert self executing function
(function(){
    
/*Create three variables for each player of the two players. Player’s name, health, and damage*/

//Spiderman's name ,health, and damage
var playerOne = ["SPIDERMAN", 100, 20];



//Batman's name ,health, and damage
var playerTwo = ["BATMAN", 100, 20];
    
//Rounds
var round = 0;


/*fight function loops through each round and reduces players health based on a randomly generated number*/
function fight(){
    alert(playerOne[0] + ":" + playerOne[1] + " *START* " + playerTwo[0] + ":" +     playerTwo[1]); 
    
        //loops the function until 10 rounds
    for (var i = 0; i < 10; i++){ 
        
        //formula to get a min damage for player 1 and player 2
        var minDamage1 = playerOne[2] * .5;
        var minDamage2 = playerTwo[2] * .5;
        
        //formula to get a random number damage for player 1 and player 2
        var f1 = Math.floor(Math.random()*(playerOne[2]-minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random()*(playerTwo[2]-minDamage2) + minDamage2);
        
        //subtract random damage from players health
        playerOne[1] -= f1;
        playerTwo[1] -= f2;
        
    //pulls results from the winnerCheck function
   var results = winnerCheck();

   if (results === "no winner"){
       
       //round is incremented
       round++;
       
       //alerts player the score after each round
       alert(playerOne[0] + ":" + playerOne[1] + " *ROUND " + round + " OVER* " +  playerTwo[0] + ":" +     playerTwo[1]);  
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
    if (playerOne[1] < 1 && playerTwo[1] <1 ){
        result = "You Both Die";
        
    //if one player's health reaches 0 or less they are the  LOSER  
    }else if(playerOne[1]<1){
        result = playerTwo[0] + " WINS!!!"
    }else if(playerTwo[1]<1){
        result = playerOne[0] + " WINS!!!"
    };
    
    //returns results to fight function
    return result;
};

// Begins program
fight();
    
//end self executing function 
})();