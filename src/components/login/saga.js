import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { login, loginFailed, loginSuccess } from "./actions";

function logging(payload) {
  console.log(payload);
}

function* loginApp(payload) {
  try {
    const data = yield axios.post("http://localhost:8080/api/auth/signin", {
      ...payload,
    });
    // const {}
    yield call(logging, data);
    yield put(loginSuccess({}));
  } catch (error) {
    yield put(loginFailed({ error }));
  }
}

function* handleLogin({ payload }) {
  yield loginApp(payload);
}

function* loginSaga() {
  yield takeLatest(login.type, handleLogin);
}

export default loginSaga;
