const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

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
}
nextThreePiece();

//hold a piece
let holdPiece = [];
let hasBeenHoldOnce = true; // flag to check if certain piece has been hold 
function holdOnePiece(){
  if(holdPiece.length === 0){
    p.undraw();
    holdPiece = p;
    p = getCurrentPiece();
    p.x = 3;
    p.y = -1;
    hasBeenHoldOnce = true;
    p.draw();
  }else{
    p.undraw();
    let temp = p;
    p = holdPiece;
    holdPiece = temp;
    p.x = 3;
    p.y = -1;
    hasBeenHoldOnce = true;
    p.draw();
  }
  console.log(p);
  ctxHold.clearRect(0, 0, canvas.width, canvas.height);
  drawHoldBoard();
  drawHoldPiece();
}

//get current piece from next pieces or hold state
function getCurrentPiece(){
  let currentPiece = threePieces.shift();
  threePieces.push(randomPiece());
  hasBeenHoldOnce = false;
  return currentPiece;
}

//instantiating a piece
let p = getCurrentPiece();

function Piece(shape, color){
  this.shape = shape;
  this.color = color;

  this.shapeNum = 0;
  this.currentShape = this.shape[this.shapeNum];

  this.x = 3;
  this.y = -1;
}