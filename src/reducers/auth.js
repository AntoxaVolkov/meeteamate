import { handleActions } from "redux-actions";

import {
  authRequest,
  authSuccess,
  authFailure,
  userLogout,
  setRedirectPath
} from "actions/actionsAuth";

const initialState = {
  token: null,
  userId: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  didInvalidate: false,
  redirectPath: "/"
};

export default handleActions(
  {
    [authRequest]: (state, action) => {
      return {
        ...state,
        isAuthenticating: true,
        didInvalidate: false
      };
    },
    [authSuccess]: (state, { payload: { token, userId } }) => {
      return {
        ...state,
        isAuthenticating: false,
        didInvalidate: false,
        statusText: "Добро пожаловать =)",
        token,
        userId,
        isAuthenticated: true
      };
    },
    [authFailure]: state => {
      return {
        ...state,
        didInvalidate: true,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        statusText: "Неверный логин или пароль"
      };
    },
    [setRedirectPath]: (state, { payload: { path } }) => {
      return {
        ...state,
        redirectPath: path
      };
    },
    [userLogout]: (state, action) => {
      return {
        token: null,
        userName: null,
        isAuthenticated: false,
        isAuthenticating: false,
        statusText: null,
        didInvalidate: false,
        redirectPath: "/"
      };
    }
  },
  initialState
);
