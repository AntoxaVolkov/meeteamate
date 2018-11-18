import { createAction } from "redux-actions";
import decode from "jwt-decode";

import { authSuccess } from "actions/actionsAuth";

import Users from "api/users";
import { isObject } from "util";

export const registration = dispatch => userData => {
  dispatch(registerRequest());
  Users.register(userData)
    .then(res => {
      let payload = decode(res["access"]);

      localStorage.setItem("refresh_token", res["refresh"]);
      dispatch(
        authSuccess({ token: res["access"], userId: payload["user_id"] })
      );
    })
    .catch(error => {
      console.log(error);
      if (isObject(error) && error.status == 400) {
        dispatch(registerFailure(error.data));
      } else {
      }
    });
};

export const registerRequest = createAction(
  "[Register] Registration  (request)"
);
export const registerSuccess = createAction(
  "[Register] Registration (success)"
);
export const registerFailure = createAction(
  "[Register] Registration (failure)"
);
