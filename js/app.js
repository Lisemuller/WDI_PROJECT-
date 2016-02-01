$(function(){

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

        var gameLost = round >= 8;


        if(gameWon) {
          console.log("well done ! You found the solution in" + round + " round !");
        } else if(gameLost) {
          console.log("You lost against the evil rabbit generator");
        }


      }  // close the choicecount==4

  
  
        // if (($('.green').length) == 4)) {
        //  console.log("well done ! You found the solution in" + round + "!");
        // }
        // else if (($('.green')).length) < 4) && (round == 8)) {
        //   console.log("Yoo loose against the evil rabbot generator");
        // }



    });// close the on key up function event 


// make it play 
//  if ((the feedback of the computer) < 4 green) {
//   round ++;
//   else if ((the feedback of the computer) < 4 green) && (round <=8))  {
//  console.log ("Well done ! You found the solution in" + round + "!");
//   }
//  else {
//     console.log("You loose against the evil rabbit generator")
// }
//  }


// associate each containers to each round
// function getRound(){
//   console.log($containers.eq(round));
// }

// getRound();



});