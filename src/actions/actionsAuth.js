import { createAction } from "redux-actions";
import decode from "jwt-decode";

import Users from "api/users";
import { isObject } from "util";

export const login = dispatch => ({ email, password, noremember }) => {
  dispatch(authRequest());

  Users.auth({ email, password })
    .then(res => {
      if (!noremember) {
        localStorage.setItem("refresh_token", res["refresh"]);
      }
      sessionStorage.setItem("access_token", res["access"]);

      let payload = decode(res["access"]);

      dispatch(
        authSuccess({ token: res["access"], userId: payload["user_id"] })
      );
    })
    .catch(error => {
      if (isObject(error) && error.status == 401) {
        sessionStorage.setItem("access_token", "");
        localStorage.removeItem("refresh_token");

        dispatch(authFailure(error));
      } else {
        dispatch(userLogout());
        console.log(error); // Сделать уведомления о системных ошибках
      }
    });
};

export const reLogin = dispatch => () => {
  let refrehToken = localStorage.getItem("refresh_token");

  if (refrehToken) {
    dispatch(authRequest());

    Users.refresh(refrehToken)
      .then(res => {
        let payload = decode(res["access"]);

        sessionStorage.setItem("access_token", res["access"]);
        localStorage.setItem("refresh_token", res["refresh"]);

        dispatch(
          authSuccess({ token: res["access"], userId: payload["user_id"] })
        );
      })
      .catch(error => {
        sessionStorage.setItem("access_token", "");
        localStorage.removeItem("refresh_token");

        dispatch(userLogout());
      });
  } else {
    dispatch(userLogout());
  }
};

export const getChekedToken = dispatch => () => {
  let refrehToken = localStorage.getItem("refresh_token");

  if (refrehToken) {
    dispatch(authRequest());

    Users.refresh(refrehToken)
      .then(res => {
        let payload = decode(res["access"]);

        sessionStorage.setItem("access_token", res["access"]);
        localStorage.setItem("refresh_token", res["refresh"]);

        dispatch(
          authSuccess({ token: res["access"], userId: payload["user_id"] })
        );
      })
      .catch(error => {
        sessionStorage.setItem("access_token", "");
        localStorage.removeItem("refresh_token");

        dispatch(userLogout());
      });
  } else {
    dispatch(userLogout());
  }
};

export const loginUserSuccess = dispatch => token => {
  let payload = decode(res["access"]);
  dispatch(authSuccess({ token, userId: payload["user_id"] }));
  return { token, payload };
};

export const logout = dispatch => () => {
  sessionStorage.setItem("access_token", "");
  localStorage.removeItem("refresh_token");
  dispatch(userLogout());
};

export const authRequest = createAction("[Auth] Login  (request)");
export const authSuccess = createAction("[Auth] Login (success)");
export const authFailure = createAction("[Auth] Login (failure)");
export const userLogout = createAction("[Auth] Logout");
export const setRedirectPath = createAction("[Auth] Set Redirect Path");
