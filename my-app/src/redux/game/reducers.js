import calculateWinner from '../../app/utils/utils';

import { actions } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  stepNumber: 0,
  status: 'Next player: X'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SUBMIT_PLAY: {
      const history = state.history.slice(0, state.stepNumber + 1);
      const currentPlay = history[history.length - 1];
      const squares = [...currentPlay.squares];
      let msj;

      if (calculateWinner(currentPlay.squares) || squares[action.payload.pos]) {
        return state;
      }

      squares[action.payload.pos] = state.xIsNext ? 'X' : 'O';

      if (calculateWinner(squares)) {
        msj = 'Winner: ' + (state.xIsNext? 'X' : 'O');
      } else {
        msj = 'Next player: ' + (!state.xIsNext ? 'X' : 'O');
      }

      return {
        history: history.concat([
          {
            squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
        status: msj
      };
    }
    case actions.JUMP_TO: {
      return {
        history: state.history,
        stepNumber: action.payload.stepNumber,
        xIsNext: state.xIsNext,
        status: state.status
      };
    }
    default:
      return state;
  }
}

export default reducer;
