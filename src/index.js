require('../css/style.scss');
import Chess from './chess';

let canvas = document.querySelector('#canvas');
let app = new PIXI.Application(640, 1136, {
  view: canvas,
  backgroundColor: 0xFFFED8
});

let chess = new Chess('chess', Chess.COLORS.GREEN, { x: 640, y: 0 });

app.stage.addChild(chess.graphics);

app.ticker.add(() => {
});
