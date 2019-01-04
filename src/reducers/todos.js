import * as actions from '../actions/index';

const todos = (state = { todos:[] } , action) => {
  switch (action.type) {
    case actions.ADD_ACTION_SUCCESS:
      return {
        ...state,
        todos: action.result
      };
    case actions.DEL_ACTION_SUCCESS:
      return {
        ...state,
        todos: action.result
      };
      // return state.map(record =>
      //   record.id === action.payload ? { ...record, isDeleted: 'Y' } : record
      // )
    case actions.QUERY_ACTION_SUCCESS:
      return {
        ...state,
        todos: action.result
      };
    default:
      return state
  }
}

export default todos

