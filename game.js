var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","blue","green","yellow"];




$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});




function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[nextSequence()];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}




function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
/*$(":button").click(function(event){
  makesound(event.target.id);
});

function makeSound(key){
  switch(key){
    case "blue":
      var b = new Audio("sounds/blue.mp3");
      b.play();
      break;
    case "green":
      var g = new Audio("sounds/green.mp3");
      g.play();
      break;
    case "red":
      var r = new Audio("sounds/red.mp3");
      r.play();
      break;
    case "yellow":
      var y = new Audio("sounds/yellow.mp3");
      y.play();
      break;
    default:
      var w = new Audio("sounds/wrong.mp3");
      w.play();
      break;
  }
}*/
