const canvasNext = document.querySelector('#next');
const ctxNext = canvasNext.getContext('2d');

//create next pieces area
let nextboard = [];
for(let r = 0; r < 10; r++){
  nextboard[r] = [];
  for(let c = 0; c < 6; c++){
    nextboard[r][c] = EMPTYSQ;
  }
}

function drawNextBoard(){
  for(let r = 0; r < 10; r++){
    for(let c = 0; c< 6; c++){
      drawNextSquare(c, r, nextboard[r][c]);
    }
  }
}
drawNextBoard();

//draw square
function drawNextSquare(x, y, color){
  ctxNext.fillStyle = color;
  ctxNext.fillRect(x*SQ, y*SQ, SQ, SQ);
  ctxNext.strokeStyle = "#979797";
  ctxNext.strokeRect(x*SQ, y*SQ, SQ, SQ);
}

//draw next section pieces
function drawNextThreePiece(){
  for(let i = 0; i < 3; i++){
    for(let r = 0; r < threePieces[i].currentShape.length; r++){
      for(let c = 0; c < threePieces[i].currentShape.length; c++){
        if(threePieces[i].currentShape[r][c]){
          drawNextSquare(1 + c, i*3 + r, threePieces[i].color);
        }
      }
    }
  }
}
drawNextThreePiece();