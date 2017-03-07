import { space, length, row, column } from './config';

export const calculateChessPosition = (location) => {
  var { x, y } = location;
  return {
    x: space / 2 + ((space + length) * x) + length / 2,
    y: space / 2 + ((space + length) * y) + length / 2
  }
}

export const findAroundLocation = (location) => {
  var arounds = [];
  var minx = location.x > 0 ? location.x - 1 : 0;
  var miny = location.y > 0 ? location.y - 1 : 0;
  var maxx = location.x < column - 1 ? location.x + 1 : column - 1;
  var maxy = location.y < row - 1 ? location.y + 1 : row - 1;
  for (var i = minx; i <= maxx; i++) {
    for (var j = miny; j <= maxy; j ++) {
      if (i == location.x && j == location.y ) continue;
      arounds.push({
        x: i,
        y: j
      })
    }
  }
  return arounds;
}
