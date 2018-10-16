export const actions = {
  SUBMIT_PLAY: '@@GAME/SUBMIT_PLAY',
  JUMP_TO: '@@GAME/JUMP_TO'
};

const actionCreators = {
  submitPlay: i => ({ type: actions.SUBMIT_PLAY, payload: { pos: i } }),
  jumpTo: stepNumber => ({ type: actions.JUMP_TO, payload: { stepNumber } })
};

export default actionCreators;
