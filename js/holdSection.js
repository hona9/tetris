const canvasHold = document.querySelector('#hold');
const ctxHold = canvasHold.getContext('2d');

//create next pieces area
let holdboard = [];
for(let r = 0; r < 6; r++){
  holdboard[r] = [];
  for(let c = 0; c < 6; c++){
    holdboard[r][c] = EMPTYSQ;
  }
}

function drawHoldBoard(){
  for(let r = 0; r < 6; r++){
    for(let c = 0; c< 6; c++){
      drawHoldSquare(c, r, holdboard[r][c]);
    }
  }
}
drawHoldBoard();

//draw square
function drawHoldSquare(x, y, color){
  ctxHold.fillStyle = color;
  ctxHold.fillRect(x*SQ, y*SQ, SQ, SQ);
  ctxHold.strokeStyle = "#979797";
  ctxHold.strokeRect(x*SQ, y*SQ, SQ, SQ);
}

//draw next section pieces
function drawHoldPiece(){
  for(let r = 0; r < holdPiece.currentShape.length; r++){
    for(let c = 0; c < holdPiece.currentShape.length; c++){
      if(holdPiece.currentShape[r][c]){
        drawHoldSquare(1 + c, 1 + r, holdPiece.color);
      }
    }
  }
}