import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../../../redux/game/actions';

import Board from './components/Board';

class Game extends Component {
  handleClick = i => {
    this.props.dispatch({ type: actions.SUBMIT_PLAY, pos: i });
  };

  jumpTo = stepNumber => {
    this.props.dispatch({ type: actions.JUMP_TO, stepNumber });
  };

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move # ' + move : 'Go to the start of the game';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{this.props.status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  xIsNext: state.xIsNext,
  stepNumber: state.stepNumber,
  status: state.status
});

export default connect(mapStateToProps)(Game);
