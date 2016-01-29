$(function(){

   var solutions = $('.sol'); 

   var choices   = ["green", "blue", "pink", "violet"];
   var botChoice; 


$('.sol').html(function() {
     var index = Math.floor(Math.random() * choices.length);
     botChoice = choices[index];
     return botChoice;
});
console.log(solutions[0]);
console.log(solutions[1]);
console.log(solutions[2]);
console.log(solutions[3]);

});