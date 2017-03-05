const radius = 50;
const RED = 0xEB7E7F;
const BLUE = 0x415C71;
const GREEN = 0x00C7AB;

let chesses = {};

function Chess(key, color, postion) {
  this.key = key;
  this.color = color;
  this.postion = postion;
  this.build(); 
  chesses[key] = this.graphics;
}

Chess.prototype.build = function() {
  if (!this.graphics) this.graphics = new PIXI.Graphics();
  this.graphics.clear();
  this.graphics.beginFill(this.color);
  this.graphics.drawCircle(this.postion.x, this.postion.y, radius);
  this.graphics.endFill();
}

Chess.prototype.move = function(vector) {
  this.x += vector.x
  this.y += vector.y
  this.build();
}

Chess.getChess = (key) => {
  return chesses[key]
}

Chess.COLORS = {
  RED, BLUE, GREEN
}

module.exports = Chess;
