import { types } from './actions';
import { createReducer } from 'redux-recompose';

const initialState = {
  items: [
    {
      label: 'Check email',
      completed: true
    },
    {
      label: 'Take a shower',
      completed: false
    },
    {
      label: 'Brush teeth',
      completed: true
    },
    {
      label: 'Eat breakfast',
      completed: false
    },
    {
      label: 'Take a shower',
      completed: true
    },
    {
      label: 'Brush teeth',
      completed: false
    },
    {
      label: 'Eat breakfast',
      completed: true
    }
  ]
};

const reducerDescription = {
  [types.ADD_ITEM]: (state, action) => ({ ...state, items: [...state.items, { label: action.payload.item, completed: false }] }),
  [types.REMOVE_ITEM]: (state, action) => ({ ...state, items: state.items.filter((item, i) => i !== action.payload.i) }),
  [types.TOGGLE_ITEM_COMPLETED]: (state, action) => ({
    ...state,
    items: state.items.map((item, i) => {
      if (i === action.payload.i) {
        return { label: item.label, completed: !item.completed };
      }

      return item;
    })
  }),
  [types.REMOVE_COMPLETED]: state => ({ ...state, items: state.items.filter(item => !item.completed) })
};

export default createReducer(initialState, reducerDescription);
