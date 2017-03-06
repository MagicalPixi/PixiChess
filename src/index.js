require('../css/style.scss');

import config from './config';
import Chess from './chess';
import Block from './block'

var canvas = document.querySelector('#canvas');
var app = new PIXI.Application(config.width, config.height, {
  view: canvas,
  backgroundColor: config.backgroundColor
});

let background = new PIXI.Container();
app.stage.addChild(background);

var blocks = []
let {space, length, row, column} = config
for (var i = 0; i < row; i ++) {
  for (var j = 0; j < column; j ++) {
    var opt = {
      x: space / 2 + (space + length) * j,
      y: space / 2 + (space + length) * i,
      width: length,
      height: length
    };
    blocks[i] = blocks[i] ? blocks[i] : [];
    var block = new Block(opt);
    background.addChild(block.graphics);
    blocks[i][j] = block;
  }
}

config.enemyChesses.map((chessConfig, index) => {
  let chess = new Chess('enemychess' + index, chessConfig.color, chessConfig);
  app.stage.addChild(chess.graphics);
})

config.myChesses.map((chessConfig, index) => {
  let chess = new Chess('mychess' + index, chessConfig.color, chessConfig);
  app.stage.addChild(chess.graphics);
})

app.ticker.add(() => {
});
