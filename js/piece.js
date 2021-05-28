//fill for draw and undraw
Piece.prototype.fill = function(color){
  for(let r = 0; r < this.currentShape.length; r++){
    for(let c = 0; c < this.currentShape.length; c++){
      if(this.currentShape[r][c]){
        drawSquare(this.x + c, this.y + r, color);
      }
    }
  }
}

//draw tetris shape in the area
Piece.prototype.draw = function(color){
  this.fill(this.color);
}

//undraw piece to clear the board
Piece.prototype.undraw = function(){
  this.fill(EMPTYSQ);
}


// if(gameState === 1){ //state1 is gameOn state
  //move down function  
  let dropStart = Date.now();
  let isGameOver = false;
  let speed = getSpeed();
  function drop(){
    let current = Date.now();
    let diff = current - dropStart;
    if(diff > speed){
      p.moveDown();
      dropStart = Date.now();
    }
    if(!isGameOver && isGameOn)  animateDrop = requestAnimationFrame(drop);
  }
  drop();
// }

//move down
Piece.prototype.moveDown = function(){
  if(!this.collision(0, 1, this.currentShape)){
    this.undraw();
    this.y++;
    this.draw();
  }else{
    //lock current piece and generate new one
    this.lock();
    p = getCurrentPiece();
    // p.ghost();
    ctxNext.clearRect(0, 0, canvas.width, canvas.height);
    drawNextBoard();
    drawNextThreePiece();
  }
}

//move right
Piece.prototype.moveRight = function(){
  if(!this.collision(1, 0, this.currentShape)){
    this.undraw();
    this.x++;
    this.draw();
  }
}

//move left
Piece.prototype.moveLeft = function(){
  if(!this.collision(-1, 0, this.currentShape)){
    this.undraw();
    this.x--;
    this.draw();
  }
}

//rotate
Piece.prototype.rotate = function(){
  let nextShape = this.shape[(this.shapeNum + 1)%this.shape.length];
  let lastWall = 0;
  //plus or minus to rotate since it cannot rotate when touching side walls;
  if(this.collision(0,0,nextShape)){
    if(this.x > COL/2){
      lastWall = -1;
    }else{
      lastWall = 1;
    }
  }

  if(!this.collision(lastWall, 0, nextShape)){
    this.undraw();
    this.x += lastWall;
    this.shapeNum = (this.shapeNum + 1)%this.shape.length;
    this.currentShape = this.shape[this.shapeNum];
    this.draw();
  }
}

//check collision detection
Piece.prototype.collision = function(x, y, shape){
  for(let r = 0; r < shape.length; r++){
    for(let c = 0; c < shape.length; c++){
      if(!shape[r][c]) continue;
      //after moving the pieces
      let newX = this.x + c + x;
      let newY = this.y + r + y;

      //condition
      if(newX < 0 || newX >= COL || newY >= ROW) return true;
      if(newY < 0) continue; //-y index is out of bound, where pieces falls from

      //if locked pieces already
      if(board[newY][newX] != EMPTYSQ) return true;
    }
  }
  return false;
}

//to lock the piece after collision
Piece.prototype.lock = function(){
  for(let r = 0; r < this.currentShape.length; r++){
    for(let c = 0; c < this.currentShape.length; c++){
      if(!this.currentShape[r][c]) continue;

      if(this.y + r < 1){
        isGameOver = true;
        gameOver();
        break;
      }
    board[this.y + r][this.x + c] = this.color;
    }
  }
  getHighScore();
  speed = getSpeed();
  removeLine();
  // comboFeature();
  drawBoard();
}

//special combo feature to stop the piece falling
// function comboFeature(){
  // if(combo == 0){
  //   p.y = 0;
  //   p.draw();
  //   window.cancelAnimationFrame(animateDrop);
  //   setTimeout(drop(), 4000);
  // }
// }
// comboFeature();

//hard-drop
Piece.prototype.hardDrop = function(){
  speed = 0;
  drop();
  score += 20;
}

//function to draw ghost pieces
Piece.prototype.ghost = function(){
  for(let r = 0; r < ROW; r++){
    for(let c = 0; c < COL; c++){
      if(this.collision(r, c, this.currentShape)){
        this.x = r;
        this.y = c;
        this.draw();
      }
    }
  }
}