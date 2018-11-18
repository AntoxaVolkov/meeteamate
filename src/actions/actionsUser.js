import { createAction } from "redux-actions";
import decode from "jwt-decode";

import Users from "api/users";
import { reLogin } from "actions/actionsAuth";

export const getUser = dispatch => () => {
  dispatch(userRequest());

  let token = sessionStorage.getItem("access_token");

  if (token) {
    let payload = decode(token);
    let exp = 0;
    let now = 0;

    if (payload && payload["exp"]) {
      exp = new Date(payload["exp"] * 1000);
      now = new Date();
      del = now - exp;
    }
  }

  if (!token || exp - now < 10000) {
    reLogin(dispatch)();
    token = sessionStorage.getItem("access_token");
  }

  Users.getUser(token)
    .then(({ id, email }) => {
      dispatch(userSuccsess({ user_id: id, email }));
    })
    .catch(error => {
      dispatch(userFailure(error));
    });
};

export const userRequest = createAction("[User] Load User  (request)");
export const userSuccsess = createAction("[User] Load User (succsess)");
export const userFailure = createAction("[User] Load User (failure)");
