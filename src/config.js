const RED = 0xEB7E7F;
const BLUE = 0x415C71;
const GREEN = 0x00C7AB;

var enemyChesses = [{x: 0, y: 0, color: RED}, {x: 2, y: 0, color: BLUE}, { x: 4, y: 0, color: GREEN}];
var myChesses = [{x: 0, y: 5, color: RED}, {x: 2, y: 5, color: BLUE}, { x: 4, y: 5, color: GREEN}];

var config = {
  width: 640,
  height: 1136,
  backgroundColor: 0xFFFED8,
  column: 5,
  row: 6,
  enemyChesses,
  myChesses
}

config.COLORS = {
  RED, BLUE, GREEN
}


config.space = (config.width % config.column) == 0 ? 5 : (config.width % config.column);
config.length = parseInt(config.width / config.column - config.space);

module.exports = config
