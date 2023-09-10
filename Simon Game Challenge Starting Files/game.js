const buttonColours =["red" , "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];

var p=false;
var level=0;

$(document).keypress(function(){
    if(p==false){
        nextSequence();
        p=true;
    }
})

$(".btn").click(function(){

    var userChosenColour=$(this).attr("id");

    userClickedPattern.push(userChosenColour);

    // console.log("User :"+userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(level);

});


function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3")
    audio.play();
}

function animatePress(currentColour){

    var c=$("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        c.removeClass("pressed");
    },100);
}

function nextSequence(){
    
    $("h1").text("Level "+level);
    

    var  randomNumber=Math.floor(Math.random()*4);

    var  randomChosenColour=buttonColours[randomNumber]

    gamePattern.push(randomChosenColour);

    // console.log("comp: "+gamePattern);

    $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);

    level+=1;

}



function checkAnswer(currentLevel){

    console.log("User :"+userClickedPattern);
    console.log("comp: "+gamePattern);
    console.log("Lev :"+currentLevel);


    if(gamePattern[currentLevel-1]==userClickedPattern[currentLevel-1]){
        console.log("correct");
        setTimeout(function(){
            nextSequence();
        },1000)
    }
    else{
        console.log("wrong");
        $("h1").text("Game Over");
        $(".btn").css("backgroundColor","gray");
        $(document).click(false);

        setTimeout(function(){
            window.location.href="./index.html";
        },2000)
    }
}