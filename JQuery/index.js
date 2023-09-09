//alert("hello world hi");
// $(document).ready(function(){
//     $("h1").css("color","yellow");
// });

// document.getElementsByTagName("h1")[0].style.color="blue";


$("h1").css("color","red")

$("a").attr("href","https://www.githbbbbbbu.com");

$("h1").html("<b><i>hello moto</i></b>");


$("h1").removeClass("small")

$("h1").addClass("big")

$("a").addClass("link")


$("h1").text("Your key stokes will appear here")


$(document).keypress(function(event){
    $("h1").text(event.key);
    //console.log(event.key);
})

$("h2").on('mouseover',function(){
    $("h2").css("color","skyblue")
})