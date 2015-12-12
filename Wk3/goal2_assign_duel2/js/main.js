/*
 Alexandria Strawter
 12/10/2015
 Assignment Goal 2: Duel 2
 */

//Insert self executing function
(function(){


//Spiderman's name ,health, and damage


var playerOne = {name:"Spiderman", health:100, damage:20};

//Batman's name ,health, and damage


var playerTwo = {name:"Batman", health:100, damage:20};

//Both fighter objects should be in an array

var fighters = [playerOne, playerTwo];


//Rounds
var round = -1;

//Replace the alerts with code that access the DOM(HTML) such as getElemetById and/or querySelector
    //capture location of score bar
    var bar = document.querySelectorAll('#scores div')
    console.log(bar);
    //capture each players health title
    var spiderHealth = bar[0];
    var batHealth = bar[1];
    //capture button
    var start = document.querySelector('.buttonblue');
    console.log('Fight Button: ', start);
    //capture round number text
    var roundNum = document.getElementById('round_number');
    console.log('Round Number: ', roundNum);

    start.addEventListener("click", fight, false);

    //Shows beginning stats
    spiderHealth.innerHTML = fighters[0].name +': ' + playerOne.health ;
    batHealth.innerHTML = fighters[1].name +': ' + playerTwo.health ;



    function fight(){
    console.log(playerOne.name + ":" + playerOne.health + " *START* " + playerTwo.name + ":" +     playerTwo.health);

    spiderHealth.innerHTML = playerOne.name + ":" + playerOne.health;
    batHealth.innerHTML = playerTwo.name + ":" + playerTwo.health;

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

                roundNum.innerHTML = " ROUND " + round;
            }else{

                //if there is a winner or tie displays results
                roundNum.innerHTML = results;

            };

        };


//Checks for a winner after every round
    function winnerCheck(){
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

