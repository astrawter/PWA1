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
//end self executing function 
})();