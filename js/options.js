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



//for customizing keys

