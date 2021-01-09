
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceNo1 = "dice" +  randomNumber1 + ".png";
var randomimagename1 = "images/" + diceNo1;
document.querySelectorAll("img")[0].setAttribute("src",randomimagename1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceNo2 = "dice" +  randomNumber2 + ".png";
var randomimagename2 = "images/" + diceNo2;
document.querySelectorAll("img")[1].setAttribute("src",randomimagename2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "⛳Player 1 wins!!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins!!⛳"
}
else document.querySelector("h1").innerHTML = "It's a draw!😃";
