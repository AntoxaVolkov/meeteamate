import { createAction } from "redux-actions";
import decode from "jwt-decode";

import Users from "api/users";

import { getChekedToken } from "actions/actionsAuth";

export const getUser = () => async dispatch => {
  dispatch(userRequest());
  try {
    let token = await dispatch(getChekedToken());
    let { id, email } = await Users.getUser(token);
    dispatch(userSuccsess({ user_id: id, email }));
  } catch (error) {
    console.log(error);
    dispatch(userFailure(error));
  }
};

export const userRequest = createAction("[User] Load User  (request)");
export const userSuccsess = createAction("[User] Load User (succsess)");
export const userFailure = createAction("[User] Load User (failure)");
