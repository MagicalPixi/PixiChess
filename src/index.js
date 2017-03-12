require('../css/style.scss');

import reducer from './script/reducer';
import { createStore, applyMiddleware } from 'redux';
import { iniState } from './script/constants';
import { onClickMyChess, moveToLocation } from './script/actions';

import config from './config';
import Chess from './chess';
import Block from './block';
import { findAroundLocation } from './util';

var store = createStore(reducer, iniState());

var state = store.getState();
var { blocks, enemyChesses, myChesses } = state;
var canvas = document.querySelector('#canvas');
var app = new PIXI.Application(config.width, config.height, {
  view: canvas,
  backgroundColor: config.backgroundColor
});

let background = new PIXI.Container();
app.stage.addChild(background);


blocks.forEach((row, i) => {
  row.forEach((opt, i) => {
    var block = new Block(opt);
    background.addChild(block.graphics);
  })
})

background.interactive = true;
app.stage.interactive = true;

enemyChesses.map((chessConfig, index) => {
  let chess = new Chess('enemychess' + index, chessConfig.color, chessConfig);
  app.stage.addChild(chess.graphics);
});

myChesses.map((chessConfig, index) => {
  let chess = new Chess('mychess' + index, chessConfig.color, chessConfig);
  app.stage.addChild(chess.graphics);
});

Chess.onClick = (chess) => {
  store.dispatch(onClickMyChess(chess));
}

// Chess.onClick = (chess) => {
//   blocks.forEach((row) => {
//     row.forEach((block) => {
//       block.draw();
//     })
//   })
//   var arrounds = findAroundLocation(chess.location);
//   arrounds.forEach(item => {
//     var block = blocks[item.y][item.x]
//     block.draw(0.8);
//   });
// };

app.ticker.add(() => {
});
