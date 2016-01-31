$(function(){

   var $solutions = $('.sol'); 
   var choices   = ["pink", "violet", "yellow", "blue"];
   var round = 0;
   var $containers = $('.container');

   // var round1 = $('.container').eq(0);


// get the random solution by the computer 
$('.sol').addClass(function() {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
});

// make the player choose a combination of 4 colours using the keyboard : 



// make eventlistener for each key 
//
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


  // make the choice enter in the first container

  if(playerChoice) {
    var $currentRound = $('.container').eq(round);
    var $currentCells = $currentRound.find('.large');
    $currentCells.eq(choiceCount).addClass(playerChoice);
    choiceCount++;
  }



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
    console.log(green,red, black);

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

    round++;
    choiceCount = 0;

  }

  if (green == 4) {
   console.log("well done ! You found the solution in" + round + "!");
  }
  else if ((green < 4) && (round <= 8)) {
    console.log("Yoo loose against the evil rabbot generator");
  }


});


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