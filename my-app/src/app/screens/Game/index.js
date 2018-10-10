import React, { Component } from 'react';
import { connect } from 'react-redux';

import calculateWinner from '../../utils/utils';
import { actions } from '../../../redux/game/actions';

import Board from './components/Board';

class Game extends Component {
  handleClick = i => {
    this.props.dispatch({ type: actions.HANDLE_CLICK, pos: i });
  };

  jumpTo = stepNumber => {
    this.props.dispatch({ type: actions.JUMP_TO, stepNumber });
  };

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move # ' + move : 'Go to the start of the game';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  xIsNext: state.xIsNext,
  stepNumber: state.stepNumber
});

export default connect(mapStateToProps)(Game);
