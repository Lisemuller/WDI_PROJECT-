$(function(){

   var solutions = $('.sol'); // transform the solutions in an array
   // var choices   = ["green", "blue", "pink", "violet"];
   var choices   = ["pink", "green", "yellow", "blue"];
   var botChoice; 

// get the random solution by the computer 
$('.sol').addClass(function() {
     var index = Math.floor(Math.random() * choices.length);
     botChoice = choices[index];
     return botChoice;
});









});