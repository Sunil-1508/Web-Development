const buttonColours =["red" , "blue", "green", "yellow"];
var gamePattern=[];


function nextSequence(){


var  randomNumber=Math.floor(Math.random()*4);

var  randomChosenColour=buttonColours[randomNumber]


gamePattern.push(randomChosenColour);

console.log(randomChosenColour);

//document.getElementById(randomChosenColour).style.backgroundColor="pink";

//$('#'+randomChosenColour).css("backgroundColor","pink")
$(document).ready(()=>{
    setTimeout(()=>{
    $('#'+randomChosenColour).fadeOut();
    $('#'+randomChosenColour).fadeIn();
   
    },100);
 });

}