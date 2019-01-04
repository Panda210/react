import { fork } from "redux-saga/effects";
import todo from "./todos";

function* rootSaga() {
  /*The saga is waiting for a action called LOAD_DASHBOARD to be activated */
  yield [
    fork(todo)
  ];
}

export default rootSaga;