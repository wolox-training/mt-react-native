import calculateWinner from '../../app/utils/utils';

import { actions } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  stepNumber: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SUBMIT_PLAY: {
      const history = state.history.slice(0, state.stepNumber + 1);
      const currentPlay = history[history.length - 1];
      const squares = [...currentPlay.squares];
      if (calculateWinner(squares) || squares[action.pos]) {
        return state;
      }
      squares[action.pos] = state.xIsNext ? 'X' : 'O';
      return {
        history: history.concat([
          {
            squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      };
    }
    case actions.JUMP_TO: {
      return {
        history: state.history,
        stepNumber: action.stepNumber,
        xIsNext: state.stepNumber % 2 === 0
      };
    }
    default:
      return state;
  }
}

export default reducer;
