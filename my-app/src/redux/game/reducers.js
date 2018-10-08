import calculateWinner from '../../app/utils//utils';

import { actions } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  stepNumber: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.handleClick: {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.pos]) {
        return state;
      }
      squares[action.pos] = state.xIsNext ? 'X' : 'O';
      return {
        history: state.history.concat([
          {
            squares
          }
        ]),
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      };
    }
    case actions.jumpTo: {
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
