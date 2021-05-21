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
//function to remove line
let lines = 0;
function removeLine(){
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
  countLines.innerHTML = `Lines: ${lines}`
}
