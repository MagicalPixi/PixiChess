import { ON_CLICK_MY_CHECSS, MOVE_TO_LOCATION } from './constants';

export const onClickMyChess = (chess) => {
  return {
    type: ON_CLICK_MY_CHECSS, chess
  }
}

export const moveToLocation = (chess, location) => {
  return {
    type: MOVE_TO_LOCATION, location
  }
}
