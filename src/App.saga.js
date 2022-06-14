import { fork } from "redux-saga/effects";
import loginSaga from "./components/login/saga";

function* rootSaga() {
  yield fork(loginSaga);
}

export default rootSaga;
