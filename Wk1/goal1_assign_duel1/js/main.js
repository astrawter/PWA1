/*
Alexandria Strawter
11/26/15
Goal 1 Duel 
*/


/*Create three variables for each player of the two players.
player’s name*/

var playerOneName = "Superman";
var playerOneHealth = 100;
var playerOneDamage = 

var playerTwoName = "Batman";
var playerTwoHealth = 100;
var playerTwoDamage = 

/*Both players start off with 100 hit points (Health)

Minimum of two functions.
fight() function - This function contains the code that loops through rounds and reduces the player’s health accordingly. Loops are reviewed in Goal2 so if you are developing this program on your own, you will need to use the FOR loop for this requirement. Here is the syntax you will need just in case you need to review FOR loops further. 
for (var i = 0; i < 10; i++){ }
winnerCheck() function - This function is invoked after each round and returns a string of either the winner, the loser, a tie (both die) or no winner yet. This function does the conditional logic to determine if there is a winner or not.*/

/*A break command is used to escape out of the loop if the fight is over before the 10 rounds is reached

To advance rounds, use the alert() function. The alert box will show the two players' remaining health and the round number. 
Example (alert button is clicked after each round) 
 Batman: 100 **START** Spiderman 100 
 Batman: 88 **ROUND 1 OVER** Spiderman 92 
 Batman: 79 **ROUND 2 OVER** Spiderman 84 
 Batman: 5 **ROUND 9 OVER** Spiderman 11 
 GAME OVER Batman Wins!!!*/

/*Damage occurs to both players at a random amount between half damage and maximum damage. So, if the player's damage variable is 50 then the amount of damage that can be inflicted will be between 25-50. The random syntax is as follows: 
Math.floor(Math.random() * (max - min) + min);*/

/*Display the correct winner after the 10th round. If both players happen to die during the same round then display “No Winner Message”.*/

/**/