import { createAction } from "redux-actions";
import decode from "jwt-decode";

import Users from "api/users";
import { getCheckedAccessToken } from "utils/auth";
import { getUser } from "actions/actionsUser";
import { isObject } from "util";

import {
  newError,
  newSuccsess,
  newWarning,
  newInfo,
  newNoty,
  removeNoty
} from "actions/actionsNotifications";

export const authRequest = createAction("[Auth] Login  (request)");
export const authSuccess = createAction("[Auth] Login (success)");
export const authFailure = createAction("[Auth] Login (failure)");

export const login = ({ email, password, noremember }) => async dispatch => {
  dispatch(authRequest());

  try {
    let res = await Users.auth({ email, password });

    if (!noremember) {
      localStorage.setItem("refresh_token", res["refresh"]);
    }
    sessionStorage.setItem("access_token", res["access"]);

    let payload = decode(res["access"]);

    dispatch(authSuccess({ token: res["access"], userId: payload["user_id"] }));

    getUser(payload["user_id"]);

    return Promise.resolve(res);
  } catch (error) {
    if (isObject(error) && error.status == 401) {
      sessionStorage.setItem("access_token", "");
      localStorage.removeItem("refresh_token");

      dispatch(authFailure(error));
    } else {
      dispatch(userLogout());
      console.log(error); // Сделать уведомления о системных ошибках
    }

    return Promise.reject(error);
  }
};

export const reLogin = () => async dispatch => {
  let refrehToken = localStorage.getItem("refresh_token");

  if (refrehToken) {
    dispatch(authRequest());
    try {
      let res = await Users.refresh(refrehToken);

      let payload = decode(res["access"]);

      sessionStorage.setItem("access_token", res["access"]);
      localStorage.setItem("refresh_token", res["refresh"]);

      dispatch(
        authSuccess({ token: res["access"], userId: payload["user_id"] })
      );

      getUser(payload["user_id"]);
      return Promise.resolve(res);
    } catch (error) {
      sessionStorage.setItem("access_token", "");
      localStorage.removeItem("refresh_token");

      dispatch(userLogout());
      dispatch(
        newError({
          title: "Ошибка",
          msg: "Ошибка авторизации. Войдите заново."
        })
      );
      return Promise.reject(error);
    }
  } else {
    dispatch(userLogout());
  }
};

export const getChekedToken = () => async dispatch => {
  try {
    let token = getCheckedAccessToken();
    if (!token) {
      let res = await dispatch(reLogin());
      token = res["access"];
    }

    return Promise.resolve(token);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginUserSuccess = dispatch => token => {
  let payload = decode(res["access"]);
  dispatch(authSuccess({ token, userId: payload["user_id"] }));
  getUser(payload["user_id"]);
  return { token, payload };
};

export const userLogout = createAction("[Auth] Logout");

export const logout = dispatch => () => {
  sessionStorage.setItem("access_token", "");
  localStorage.removeItem("refresh_token");
  dispatch(userLogout());
};

export const setRedirectPath = createAction("[Auth] Set Redirect Path");
