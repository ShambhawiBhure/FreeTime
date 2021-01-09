var totalButtons = document.querySelectorAll(".drum").length;
for(var i=0; i < totalButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
      case "A":
        var drum1 = new Audio('sounds/drum-1.mp3');
        drum1.play();
        break;
      case "B":
        var drum2 = new Audio('sounds/drum-2.mp3');
        drum2.play();
        break;
      case "C":
        var drum3 = new Audio('sounds/drum-3.mp3');
        drum3.play();
        break;
      case "D":
        var drum4 = new Audio('sounds/drum-4.mp3');
       drum4.play();
        break;
      case "E":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "F":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "G":
        var kickbass = new Audio('sounds/kick-bass.mp3');
        kickbass.play();
        break;
    default: console.log(key);
  }
}

function buttonAnimation(currentKey){
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  },100);

}
