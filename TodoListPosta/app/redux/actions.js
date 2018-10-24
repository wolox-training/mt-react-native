import { createTypes } from 'redux-recompose';

export const types = createTypes([
  'ADD_ITEM',
  'REMOVE_ITEM',
  'TOGGLE_ITEM_COMPLETED',
  'REMOVE_COMPLETED'
], '@@TODO_LIST');

const actionCreators = {
  addItem: item => {
    return {type: types.ADD_ITEM, payload: {item: item}};
  },
  removeItem: index => {
    return {type: types.REMOVE_ITEM, payload: {i: index}};
  },
  toggleItemCompleted: index => {
    return {type: types.TOGGLE_ITEM_COMPLETED, payload: {i: index}};
  },
  removeCompleted: () => {
    return {type: types.REMOVE_COMPLETED};
  }
};

export default actionCreators;
