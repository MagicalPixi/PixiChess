const color = 0XFFE9BF;

function Block(opt) {
  this.config = opt;
  this.draw();
}

Block.prototype.draw = function() {
  if (!this.graphics) this.graphics = new PIXI.Graphics();
  this.graphics.clear();
  this.graphics.beginFill(color, 0.3);
  this.graphics.drawRect(this.config.x, this.config.y, this.config.width, this.config.height);
  this.graphics.endFill();
}

module.exports = Block;
