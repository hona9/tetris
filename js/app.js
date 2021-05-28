let playButton = document.getElementById("play");
let isGameOn = false;
playButton.addEventListener("click", function(){
  isGameOn = true;
  drop();
});