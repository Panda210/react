import { takeLatest } from 'redux-saga';
import { call, put, all, select } from 'redux-saga/effects';
import * as actions from '../actions/index';
// 添加数据
function* addAction() {
  try {
    const state = yield select();
    console.log('######### state',state);
    const data = state.todos;
    let key = 0;
    if(Array.isArray(data)) {
      data.map((record,index)=>{
        if(index > key){
          key = index;
        }
      })
      key = key + 1;
      data.push({
        id: key, 
        text: `测试数据第${key}个`, 
        isDeleted: 'N'
      });
      console.log('######data',data);
      yield put(actions.addActionSuccess(data));
    } else {
      const data = [{
        id: 1, 
        text: '测试数据第1个', 
        isDeleted: 'N'
      }];
      console.log('######开始没有数据 data',data);
      yield put(actions.addActionSuccess(data));
    }
  } catch (error) {
    console.log('addAction error:',error);
  }
}

// 删除数据
function* delAction(action) {
  try {
    const state = yield select();
    if(state){
      const data = state.todos;
      if(Array.isArray(data)){
        const newData = [];
        data.map((record,index)=>{
          if(index !== action.payload){
            newData.push(record);
          }
        });
        console.log('删除之后的数据信息 data',data);
        yield put(actions.delActionSuccess(data)); 
      }
    }
  } catch (error) {
    console.log('delAction error:',error);
  }
}

// 查询数据
function* queryAction(){
  debugger
  try{
    const state = yield select();
    console.log('#### queryAction',state);
    if(state){
      const data = state.todos;
      if(Array.isArray(data)){
        yield put(actions.queryActionSuccess(data));
      }else{
        yield put(actions.queryActionSuccess([]));
      }
    }
  }catch(error){
    console.log('queryAction error:',error);
  }
}

export default function* todo() {
  yield all([
    takeLatest(actions.ADD_ACTION, addAction),
    takeLatest(actions.DEL_ACTION, delAction),
    takeLatest(actions.QUERY_ACTION, queryAction)
  ]);
}
