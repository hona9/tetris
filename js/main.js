const canvasHold = document.querySelector('#hold');
const ctxHold = canvasHold.getContext('2d');

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
    p.hold();
  }
}

let countLines = document.querySelector('.lines');
let scoreCount = document.querySelector('.score');
let levelCount = document.querySelector('.level');
//function to remove line
let universalLines = 0;
let score = 0;
let level = 1;
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
  universalLines += lines;
  // changeSpeed();
  countLines.innerHTML = `Lines: ${universalLines}`
  scoreCount.innerHTML = `Score: ${score}`
  levelCount.innerHTML = `Level: ${level}`
}

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