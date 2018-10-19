import { types } from './actions';

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
      completed: false
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM: {
      return { ...state, items: [...state.items, { label: action.payload.item, completed: false }] };
    }
    case types.REMOVE_ITEM: {
      return { ...state, items: state.items.filter((item, i) => i !== action.payload.i) };
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      return {
        ...state,
        items: state.items.map((item, i) => {
          if (i === action.payload.i) {
            return { label: item.label, completed: !item.completed }
          }

          return item;
        })
      };
    }
    case types.REMOVE_COMPLETED: {
      return { ...state, items: state.items.filter(item => !item.completed) };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
