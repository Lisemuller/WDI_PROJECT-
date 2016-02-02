$(function(){




  //PLAYER 1

   // Create an array with all the different solutions
   //Create an array with the container solutions ( each lign of the table)
   // Put the round to zero. 
   // Create an empty array to receive the solutions of the computer
   var $solutions = $('.sol'); 
   var choices   = ["pink", "violet", "yellow", "blue"];
   var round = 0;
   var $containers = $('.container');
   var sol = [];


   // set a variable for the playerchoice
   //put the choiceCount to zero. The choiceCount makes us go through boxes.
   // Creat an empty array to receive the guess 
  
    var playerChoice = null;
    var choiceCount = 0;
    var guess = [];

    //Create the random solution by the computer by returning randomly the value of one of the index of choice.
    $('.sol').addClass(function() {
      var index = Math.floor(Math.random() * choices.length);
      return choices[index];
    });
  

    // create an event listener to link the keyboard to a rabbit color, so the player can choose its solution by attributing the color to the variable playerChoice.
    $(document).on("keyup", function(event) {

      if(event.keyCode === 81) {
        playerChoice = "pink";
      }
      else if(event.keyCode === 87) {
        playerChoice = "blue";
      }
      else if(event.keyCode === 69) {
        playerChoice = "violet";
      }
      else if (event.keyCode === 82) {
        playerChoice = "yellow";
      }
      else {
        playerChoice = null;
      }


      // make the choice enter in the first container for each box (choiceCount) and push it in the guess array.

      if(playerChoice) {
        var $currentRound = $('.container').eq(round);
        var $currentCells = $currentRound.find('.large');
        $currentCells.eq(choiceCount).addClass(playerChoice);
        guess.push(playerChoice);
        choiceCount++;
      }

      // Give the feedback of the computer ... ( HARDEST PART)

        var green = 0;
        var red = 0;
        var black = 0;


      if (choiceCount == 4) { // When one lign is fulfilled

        // Reset the solution to the right color of the beginning so that it is not altered by the modification below. 
        $('.sol').each(function(i, solCell) {
          sol.push($(solCell).attr('class').replace('sol ', ''));
        });

        // Check if there is an exact match by comparing between the guess array and the sol array. 
        //If there is one exact match :
        //- it adds 1 to the variable green 
        //- push the '^' inside the sol array 
        //- push "!" in the guess array 
        // => we have to put two differents characters so it doesn't match again
        guess.forEach(function(val, i) {
          if(sol[i] === val) {
            sol[i] = "^";
            guess[i] = "!";
            green++;
          }
        });


        //check if there is a close match by comparing between the sol array and the guess array that have been modified by the previous expression if there was an exact match. So it just look through the other that has'nt been modified.
        guess.forEach(function(val, i) {
          if(sol.indexOf(val) !== -1) {
            sol[sol.indexOf(val)] = '^';
            guess[i] = '!';
            red++;
          } else {
            black++;
          }
        });

        console.log(sol, guess, green, red, black);

        
        // At this point, you can say if the player has won, when all te feedback are green 
        var gameWon = (green === 4);
   

        //And make it appears in the litte  boxes each round : change the class of the little box by adding the color the feedback returns. Make a countdown so it return the good number of green / red/ black

        $.each($currentRound.find('.small'), function(i, elem) {
          if(green > 0) {
            $(elem).addClass('green');
            green -= 1;
          }
          else if(red > 0) {
            $(elem).addClass('red');
            red -= 1;
          }
          else if (black > 0) {
            $(elem).addClass('black');
            black -= 1;
          }
         });

        // make it play to an another round and put the counter of each row to zero each time
        round++;
        playerChoice = null;
        choiceCount = 0;
        guess = [];
        sol = [];

        // gameLogic 
        // The game is lost if the player didn't find the right solution in less than 8 round
        var gameLost = round >= 8;


        if(gameWon) {
          console.log("well done ! You found the solution in" + round + " round !");
          $('.solution').addClass("visible");
        } else if(gameLost) {
          console.log("You lost against the evil rabbit generator");
          $('.solution').addClass("visible");
        }

        if  (($('.solution').hasClass("visible")) && (gameWon)){
          $('#rules').html("Player Left found the solution in" + round + "round")
        }
        else if (gameLost){
         $('#rules').html("Player Left lost against the Evil Rabbit Generator")
        }

      }  // close the choicecount==4

    });// close the on key up function event 


// PLAYER 2

//Create an array with the container solutions 
// Create an array with all the different solutions
// Put the round to zero. 
var $solutions2 = $('.sol2'); 
var choices2   = ["pink", "violet", "yellow", "blue"];
var round2 = 0;
var $containers2 = $('.container2');
var sol2 = [];


// set a variable for the playerchoice
//put the choiceCount to zero. The choiceCount makes us go through boxes.
// Creat an empty array to receive the guess 

 var playerChoice2 = null;
 var choiceCount2 = 0;
 var guess2 = [];

 //Create the random solution by the computer by returning randomly the value of one of the index of choice.
 $('.sol2').addClass(function() {
   var index = Math.floor(Math.random() * choices2.length);
   return choices2[index];
 });


 // make eventlistener for each key 

 $(document).on("keyup", function(event) {

   if(event.keyCode === 85) {
     playerChoice2 = "pink";
   }
   else if(event.keyCode === 73) {
     playerChoice2 = "blue";
   }
   else if(event.keyCode === 79) {
     playerChoice2 = "violet";
   }
   else if (event.keyCode === 80) {
     playerChoice2 = "yellow";
   }
   else {
     playerChoice2 = null;
   }


   // make the choice enter in the first container and go to the other round

   if(playerChoice2) {
     var $currentRound2 = $('.container2').eq(round2);
     var $currentCells2 = $currentRound2.find('.large2');
     $currentCells2.eq(choiceCount2).addClass(playerChoice2);
     guess2.push(playerChoice2);
     choiceCount2++;
   }


   // Give the feedback of the computer ...

     var green2 = 0;
     var red2 = 0;
     var black2 = 0;

     // Give the feedback of the computer ... ( HARDEST PART)

       var green2 = 0;
       var red2 = 0;
       var black2 = 0;


     if (choiceCount2 == 4) { // When one lign is fulfilled

       // Reset the solution to the right color of the beginning so that it is not altered by the modification below. 
       $('.sol2').each(function(i, solCell) {
         sol2.push($(solCell).attr('class').replace('sol2 ', ''));
       });

       // Check if there is an exact match by comparing between the guess array and the sol array. 
       //If there is one exact match :
       //- it adds 1 to the variable green 
       //- push the '^' inside the sol array 
       //- push "!" in the guess array 
       // => we have to put two differents characters so it doesn't match again
       guess2.forEach(function(val, i) {
         if(sol2[i] === val) {
           sol2[i] = "^";
           guess2[i] = "!";
           green2++;
         }
       });


       //check if there is a close match by comparing between the sol array and the guess array that have been modified by the previous expression if there was an exact match. So it just look through the other that has'nt been modified.
       guess2.forEach(function(val, i) {
         if(sol2.indexOf(val) !== -1) {
           sol2[sol2.indexOf(val)] = '^';
           guess2[i] = '!';
           red2++;
         } else {
           black2++;
         }
       });



     var gameWon2 = (green2 === 4);


     //and make it appears in the litte  boxes each round

     $.each($currentRound2.find('.small2'), function(i, elem) {
       if(green2 > 0) {
         $(elem).addClass('green2');
         green2 -= 1;
       }
       else if(red2 > 0) {
         $(elem).addClass('red2');
         red2 -= 1;
       }
       else if (black2 > 0) {
         $(elem).addClass('black2');
         black2 -= 1;
       }
      });

     // make it play to an another round and put the counter of each row to zero each time
     round2++;
     playerChoice2 = null;
     choiceCount2 = 0;
     guess2 = [];
     sol2 = [];


     // gameLogic
     var gameLost2 = round2 >= 8;


     if(gameWon2) {
       console.log("well done ! You found the solution in" + round2 + " round !");
       $('.solution2').addClass("visible2");
     } else if(gameLost2) {
       console.log("You lost against the evil rabbit generator");
       $('.solution2').addClass("visible2");
     }

     if  (($('.solution2').hasClass("visible2")) && (gameWon2)){
       $('#winner2').html("Player Right found the solution in" + round + "round")
     }
     else if(gameLost2){
      $('#winner2').html("Player Right lost against the Evil Rabbit Generator ")
     }

   }  // close the choicecount==4

 });// close the on key up function event 





});