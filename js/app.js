$(function(){


  //PLAYER 1

   //Create an array with the container solutions 
   // Create an array with all the different solutions
   // Put the round to zero. 
   var $solutions = $('.sol'); 
   var choices   = ["pink", "violet", "yellow", "blue"];
   var round = 0;
   var $containers = $('.container');

   


    // Get the random solution by the computer 
    $('.sol').addClass(function() {
      var index = Math.floor(Math.random() * choices.length);
      return choices[index];
    });


    // make eventlistener for each key 
  
    var playerChoice = null;
    var choiceCount = 0;

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


      // make the choice enter in the first container and go to the other round

      if(playerChoice) {
        var $currentRound = $('.container').eq(round);
        var $currentCells = $currentRound.find('.large');
        $currentCells.eq(choiceCount).addClass(playerChoice);
        choiceCount++;
      }

      // Give the feedback of the computer ...

        var green = 0;
        var red = 0;
        var black = 0;

      if (choiceCount == 4) {
        $.each($currentCells, function(i,cell){

          var choiceClass = $(cell).attr('class').replace('large ', '');
          var solutionClass = $solutions.eq(i).attr('class').replace('sol ', '');

           if(choiceClass === solutionClass) {
              console.log("this is green");
              green++;
          } else if($solutions.hasClass(choiceClass)) {
              console.log("this is red");
              red++;
          }
            else {
              console.log("this is black");
              black++;
          }
        });

        var gameWon = (green === 4);
   

        //and make it appears in the litte  boxes each round

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
        choiceCount = 0;

        // gameLogic
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




 // Get the random solution by the computer 
 $('.sol2').addClass(function() {
   var index = Math.floor(Math.random() * choices2.length);
   return choices2[index];
 });


 // make eventlistener for each key 

 var playerChoice2 = null;
 var choiceCount2 = 0;

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
     choiceCount2++;
   }

   // Give the feedback of the computer ...

     var green2 = 0;
     var red2 = 0;
     var black2 = 0;

   if (choiceCount2 == 4) {
     $.each($currentCells2, function(i,cell){

       var choiceClass2 = $(cell).attr('class').replace('large2 ', '');
       var solutionClass2 = $solutions.eq(i).attr('class').replace('sol2 ', '');

        if(choiceClass2 === solutionClass2) {
           console.log("this is green");
           green2++;
       } else if($solutions2.hasClass(choiceClass2)) {
           console.log("this is red");
           red2++;
       }
         else {
           console.log("this is black");
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
     choiceCount2 = 0;

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