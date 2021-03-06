const color = 0XFFE9BF;
import { calculateBlockPosition } from './util';

function Block(opt) {
  this.config = Object.assign({}, opt, calculateBlockPosition(opt));
  this.draw();
}

Block.prototype.draw = function(alpha) {
  alpha = alpha || 0.3
  if (!this.graphics) this.graphics = new PIXI.Graphics();
  this.graphics.clear();
  this.graphics.beginFill(color, alpha);
  this.graphics.drawRect(this.config.x, this.config.y, this.config.width, this.config.height);
  this.graphics.endFill();
}

Block.prototype.highlight = function() {

}

module.exports = Block;
