//control keys
document.addEventListener('keydown', CONTROL);

function CONTROL(e){
  if(e.keyCode == 37){
    p.moveLeft();
  }else if(e.keyCode == 38){
    p.rotate();
  }else if(e.keyCode == 39){
    p.moveRight();
  }else if(e.keyCode == 40){
    p.moveDown();
  }else if(e.keyCode == 32){
    p.hardDrop();
  }else if(e.keyCode == 67){
    if(!hasBeenHoldOnce) holdOnePiece();
  }
}

let countLines = document.querySelector('.lines');
let scoreCount = document.querySelector('.score');
let levelCount = document.querySelector('.level');
let highScoreCount = document.querySelector('.highScore');
let comboCount;

let linesClearedCount = 0;
let score = 0;
let increaseLevelAfter = 10; //increase level after 10 line clearance
let highScore = 0;
let level = 0;
let combo = 0;
//check if user input level
// if(!levelValue){
//   level = 0;
// }else{
//   level = getLevel();
// }

//function to remove line
function removeLine(){
  let lines = 0;
  for(r = 0; r < ROW; r++){
    let isRowFull = true;
    for(c = 0; c < COL; c++){
      isRowFull = isRowFull && (board[r][c] != EMPTYSQ);
    }
    if(isRowFull){
      lines +=1;
      for(let y = r; y>1; y--){
        for(let c = 0; c< COL; c++){
          board[y][c] = board[y-1][c];
        }
      }
      for(c = 0; c< COL; c++){
        board[0][c] = EMPTYSQ;
      }
    }
  }
  getLineClearPoints(lines);
  getComboCount(lines);
  linesClearedCount += lines;
  level = Math.floor(linesClearedCount/increaseLevelAfter);
  
  countLines.innerHTML = linesClearedCount;
  scoreCount.innerHTML = score;
  levelCount.innerHTML = level;
}
highScoreCount.innerHTML = localStorage.getItem("HighScore");

function getLineClearPoints(lines){  
  const lineClearPoints =
    lines === 1
      ? POINTS.SINGLE
      : lines === 2
      ? POINTS.DOUBLE
      : lines === 3
      ? POINTS.TRIPLE
      : lines === 4
      ? POINTS.TETRIS
      : 0;
  score += lineClearPoints;
  return score;
}

//change speed and level
function getSpeed(){
  if(level <= 12){
    formulae = 1500 - (100 * (level+1));
    return formulae;
  }
}

//high score
let newHighScore = false;
function getHighScore(){
  if(score > highScore){
    newHighScore = true;
    highScore = score;
    localStorage.setItem("HighScore", highScore);
  }
}

//combo count
function getComboCount(lines){
  if(lines > 0){
    combo++
  }else{
    combo = 0;
  }
  console.log(combo);
}

