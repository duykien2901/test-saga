import { createReducer } from "@reduxjs/toolkit";
import { login } from "./actions";

const intialState = {
  isLogging: false,
};

const loginReducer = createReducer(intialState, {
  [login]: (state) => ({
    ...state,
    isLogging: true,
  }),
});

export default loginReducer;
