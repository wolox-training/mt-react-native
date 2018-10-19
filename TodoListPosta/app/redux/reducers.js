import { types } from './actions';

const initialState = {
  items: [{
    label: 'Check email',
    completed: true
    } , {
    label: 'Take a shower',
    completed: false
    } , {
    label: 'Brush teeth',
    completed: false
    } , {
    label: 'Eat breakfast',
    completed: false
    } , {
    label: 'Take a shower',
    completed: true
    } , {
    label: 'Brush teeth',
    completed: false
    } , {
    label: 'Eat breakfast',
    completed: true
  }]
}

const reducer = (state = initialState, action) => {

switch(action.type) {
  case types.ADD_ITEM: {
    console.warn('submitting item');
    return state;
  }
  case types.REMOVE_ITEM: {
    console.warn('item removed!' );
    return state;
  }
  case types.TOGGLE_ITEM_COMPLETED: {
    console.warn('item toggled!');
    return state;
  }
  case types.REMOVE_COMPLETED: {
    console.warn('remove all');
    return state;
  }
  default: {
      return state
    }
  }
}

export default reducer;
