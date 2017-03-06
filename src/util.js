import { space, length } from './config';

export const calculateChessPosition = (location) => {
  var { x, y } = location;
  return {
    x: space / 2 + ((space + length) * x) + length / 2,
    y: space / 2 + ((space + length) * y) + length / 2
  }
}
