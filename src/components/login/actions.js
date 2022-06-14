import { createAction } from "@reduxjs/toolkit";

export const login = createAction("LOGIN");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFailed = createAction("LOGIN_FAILED");
