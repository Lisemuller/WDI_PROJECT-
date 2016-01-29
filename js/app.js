$(function(){

   var solutions = $('.sol'); 
   var choices   = ["pink", "green", "yellow", "blue"];
   var botChoice; 
   var round = 0;
   var $containers = $('.container');

   // var round1 = $('.container').eq(0);


// get the random solution by the computer 
$('.sol').addClass(function() {
  var index = Math.floor(Math.random() * choices.length);
  botChoice = choices[index];
  return botChoice;
});

// make the player choose a combination of 4 colours using the keyboard : 

// $('#').addClass(function(){
//   return getPlayerChoice();
// });


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
    playerChoice = "green";
  }
  else if (event.keyCode === 82) {
    playerChoice = "yellow";
  }
  else {
    playerChoice = null;
  }


  if(playerChoice) {
    var $currentRound = $('.container').eq(round);
    var $currentCells = $currentRound.find('.large');
    $currentCells.eq(choiceCount).addClass(playerChoice);

    choiceCount++;
  }

});



// make the computer give the feedback 

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