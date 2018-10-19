export const types = {
  ADD_ITEM: '@@TODO_LIST/ADD_ITEM',
  REMOVE_ITEM: '@@TODO_LIST/REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: '@@TODO_LIST/TOGGLE_ITEM_COMPLETED',
  REMOVE_COMPLETED: '@@TODO_LIST/REMOVE_COMPLETED',
}

const actionCreators = {
  addItem: () => {
    return {type: types.ADD_ITEM}
  },
  removeItem: () => {
    return {type: types.REMOVE_ITEM}
  },
  toggleItemCompleted: () => {
    return {type: types.TOGGLE_ITEM_COMPLETED}
  },
  removeCompleted: () => {
    return {type: types.REMOVE_COMPLETED}
  },
}

export default actionCreators;
