import { createAction } from "redux-actions";
import decode from "jwt-decode";

import Users from "api/users";

import { getChekedToken } from "actions/actionsAuth";
import { addUsers } from "actions/actionsUsers";

export const getUser = uid => async dispatch => {
  dispatch(userRequest());
  try {
    console.log(uid);
    let token = await dispatch(getChekedToken());
    let user = await Users.getUser(uid, token);
    let { id } = user;
    dispatch(addUsers({ users: { [id]: user } }));
    dispatch(userSuccsess({ id }));
  } catch (error) {
    console.log(error);
    dispatch(userFailure(error));
  }
};

export const userRequest = createAction("[User] Load User  (request)");
export const userSuccsess = createAction("[User] Load User (succsess)");
export const userFailure = createAction("[User] Load User (failure)");
