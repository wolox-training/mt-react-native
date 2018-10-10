import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../../redux/game/actions';

import Board from './components/Board';

class Game extends Component {
  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move # ' + move : 'Go to the start of the game';
      return (
        <li key={move}>
          <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.props.handleClick(i)} />
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

const mapDispatchToProps = dispatch => ({
  handleClick: i => {
    dispatch({ type: actionCreators.SUBMIT_PLAY, payload: { pos: i } });
  },

  jumpTo: stepNumber => {
    dispatch({ type: actionCreators.JUMP_TO, payload: { stepNumber } });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
