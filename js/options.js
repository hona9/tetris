const openOptionsButton = document.querySelector('#option');
const closeOptionsButton = document.querySelector('#applyChanges');
const overlay = document.querySelector('#overlay');
const controls = document.querySelector('.controls');
const closeDesiredSection = document.querySelector('#cancel-button');
// let levelValue = document.querySelector('#level-length').value;

//open and close menu
openOptionsButton.addEventListener('click', ()=> {
  openControlOptions();
  cancelAnimationFrame(animateDrop);
});

closeOptionsButton.addEventListener('click', ()=> {
  // getLevel();
  closeControlOptions();
  drop();
});

function openControlOptions(){
  controls.classList.add('active');
  overlay.classList.add('active');
}

function closeControlOptions(){
  controls.classList.remove('active');
  overlay.classList.remove('active');
}

// function getLevel(){
//   return levelValue;
// }

const showScoreBoard = document.querySelector('.scoreBoard');
const showScore = document.querySelector('.gameOverscore');
const showNewHighScore = document.querySelector('#newHighScore');
//gameover function
function gameOver(){
  showScore.innerHTML = score;
  if(newHighScore){
    showNewHighScore.classList.add('active');
  }else{
    showNewHighScore.classList.remove('active');
  }
  showScoreBoard.classList.add('active');
  overlay.classList.add('active');
}

//for customizing keys

