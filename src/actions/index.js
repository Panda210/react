// actions
export const ADD_ACTION = Symbol('ADD_ACTION');
export const ADD_ACTION_SUCCESS = Symbol('ADD_ACTION_SUCCESS');
export const addAction = () => ({type: ADD_ACTION });
export const addActionSuccess = (data) => ({type: ADD_ACTION_SUCCESS, result: data });

export const DEL_ACTION = Symbol('DEL_ACTION');
export const DEL_ACTION_SUCCESS = Symbol('DEL_ACTION_SUCCESS');
export const delAction = (id) => ({ type: DEL_ACTION, payload: id });
export const delActionSuccess = (data) => ({type: DEL_ACTION_SUCCESS, result: data });

export const QUERY_ACTION = Symbol('QUERY_ACTION');
export const QUERY_ACTION_SUCCESS = Symbol('QUERY_ACTION_SUCCESS');
export const queryAction = () => ({ type: QUERY_ACTION });
export const queryActionSuccess = (data) => ({ type: QUERY_ACTION, result: data });