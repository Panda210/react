import * as actions from '../actions/index';

const todos = (state = {} , action) => {
  switch (action.type) {
    case actions.ADD_ACTION_SUCCESS:
      return {
        ...state,
        result: action.result
      };
    case actions.DEL_ACTION_SUCCESS:
      return state.map(record =>
        record.id === action.payload ? { ...record, isDeleted: 'Y' } : record
      )
    case actions.QUERY_ACTION_SUCCESS:
      const result = [];
      return state.some(record => {
          if(record.isDeleted === 'N'){
            result.push(record);
          }
          return result;}
        )
    default:
      return state
  }
}

export default todos

