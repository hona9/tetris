const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const canvasNext = document.querySelector('#next');
const ctxNext = canvasNext.getContext('2d');

//create game area
let board = [];
for(let r = 0; r < ROW; r++){
  board[r] = [];
  for(let c = 0; c < COL; c++){
    board[r][c] = EMPTYSQ;
  }
}

function drawBoard(){
  for(let r = 0; r < ROW; r++){
    for(let c = 0; c< COL; c++){
      drawSquare(c, r, board[r][c]);
    }
  }
}
drawBoard();

//draw square
function drawSquare(x, y, color){
  ctx.fillStyle = color;
  ctx.fillRect(x*SQ, y*SQ, SQ, SQ);
  ctx.strokeStyle = "#979797";
  ctx.strokeRect(x*SQ, y*SQ, SQ, SQ);
}

//generate random pieces
function randomPiece(){
  let r = Math.floor(Math.random()* SHAPES.length);
  return new Piece(SHAPES[r][0], SHAPES[r][1]);
}

//next three pieces
let threePieces = [];
function nextThreePiece(){
  for(let i = 0; i < 3; i++){
    threePieces.push(randomPiece());
  }
  console.log(threePieces);
}
nextThreePiece();

//get current piece from next pieces or hold state
function getCurrentPiece(){
  let currentPiece = threePieces.shift();
  threePieces.push(randomPiece());
  return currentPiece;
}

//instantiating a piece
let p = getCurrentPiece();
console.log(p);

function Piece(shape, color){
  this.shape = shape;
  this.color = color;

  this.shapeNum = 0;
  this.currentShape = this.shape[this.shapeNum];

  this.x = 3;
  this.y = 3;
}

//create next pieces area
let nextboard = [];
for(let r = 0; r < 10; r++){
  nextboard[r] = [];
  for(let c = 0; c < 5; c++){
    nextboard[r][c] = EMPTYSQ;
  }
}

function drawNextBoard(){
  for(let r = 0; r < 10; r++){
    for(let c = 0; c< 5; c++){
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

function drawNextThreePiece(){
  console.log(threePieces[0])
  
}
drawNextThreePiece();