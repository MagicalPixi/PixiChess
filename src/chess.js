import config from './config';
import { calculateChessPosition } from './util';
const radius = config.length / 2 * 0.8;

const { RED, BLUE, GREEN } = config.COLORS;

let chesses = {};

function Chess(key, color, postion) {
  this.key = key;
  this.color = color;
  this.location = postion
  this.postion = calculateChessPosition(postion);
  this.draw();
  chesses[key] = this
  this.graphics.interactive = true;
  this.graphics.on('touchstart', function() {
    if (Chess.onClick) {
      Chess.onClick(chesses[key])
    }
  });
}

Chess.prototype.draw = function() {
  if (!this.graphics) this.graphics = new PIXI.Graphics();
  this.graphics.clear();
  this.graphics.beginFill(this.color);
  this.graphics.drawCircle(this.postion.x, this.postion.y, radius);
  this.graphics.endFill();
}

Chess.prototype.move = function(vector) {
  this.location.x += vector.x;
  this.location.y += vector.y;
  this.postion = calculateChessPosition(this.location);
  this.draw();
}

Chess.getChess = (key) => {
  return chesses[key]
}

Chess.COLORS = config.COLORS;

module.exports = Chess;
