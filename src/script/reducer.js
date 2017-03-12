import { ON_CLICK_MY_CHECSS, MOVE_TO_LOCATION } from './constants';
import { findAroundLocation } from '../util'

let handleOnClickMyChess = (state = {}, action) => {
  let { blocks } = state;
  let { chess } = action;
  let locations = findAroundLocation(chess.location)
  blocks.forEach(row => row.forEach(block => block.highlight = false));
  locations.forEach((location) => {
    blocks[location.y][location.x].highlight = true;
  })
  return state;
}

var reducer = (state = {}, action) => {
  switch (action.type) {
    case ON_CLICK_MY_CHECSS:
      return handleOnClickMyChess(state, action);
    case MOVE_TO_LOCATION:
      let { myChesses } = state
      let { chess, location } = action;
      let nextChess = Object.assign({}, chess, { location });
      let next = myChesses.slice().map(mychess => {
        if (mychess == chess) {
          return nextChess;
        } else {
          return mychess;
        }
      })
      return Object.assign({}, state, { myChesses: next })
    default:
      return state;
  }
};

export default reducer;
