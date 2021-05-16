var randomNumber1=Math.ceil((Math.random()*6));
var randomImage1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImage1);

var randomNumber2=Math.ceil((Math.random()*6));
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins 🚩";
}
else {     
    document.querySelector("h1").innerHTML="Match Drawn";
}

document.querySelector("h2").addEventListener("click", function(){
    location.reload();
})