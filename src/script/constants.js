import config from '../config';
let {space, length, row, column, COLORS} = config
let { RED, BLUE, GREEN } = COLORS;
var enemyChesses = [{x: 0, y: 0, color: RED}, {x: 2, y: 0, color: BLUE}, { x: 4, y: 0, color: GREEN}];
var myChesses = [{x: 0, y: 5, color: GREEN}, {x: 2, y: 5, color: BLUE}, { x: 4, y: 5, color: RED}];

var blocks = []
for (var i = 0; i < row; i ++) {
  for (var j = 0; j < column; j ++) {
    var opt = {
      x: j,
      y: i,
      highlight: false
    };
    blocks[i] = blocks[i] ? blocks[i] : [];
    blocks[i][j] = opt
  }
}

export const iniState = () => {
  return {
    blocks, myChesses, enemyChesses
  }
}

export const ON_CLICK_MY_CHECSS = "ON_CLICK_MY_CHECSS";
export const MOVE_TO_LOCATION = "MOVE_TO_LOCATION";
