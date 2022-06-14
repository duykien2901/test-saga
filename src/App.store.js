import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootSaga from "./App.saga";
import loginReducer from "./components/login/reducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({ loginReducer });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
