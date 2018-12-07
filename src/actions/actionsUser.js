import { createAction } from "redux-actions";
import decode from "jwt-decode";

import Users from "api/users";

import { getChekedToken } from "actions/actionsAuth";
import { addUsers } from "actions/actionsUsers";

export const userRequest = createAction("[User] Get  (request)");
export const userSuccsess = createAction("[User] Get (succsess)");
export const userFailure = createAction("[User] Get (failure)");
export const userClear = createAction("[User] Clear");

export const getUser = uid => async dispatch => {
  dispatch(userRequest());
  try {
    let token = await dispatch(getChekedToken());
    let user = await Users.getUser(uid, token);
    let { id } = user;
    dispatch(addUsers({ users: { [id]: user } }));
    dispatch(userSuccsess());
  } catch (error) {
    console.log(error);
    dispatch(userFailure(error));
  }
};
/*
export const updateUserRequest = createAction("[User] Update User  (request)");
export const updateUserSuccsess = createAction("[User] Update User (succsess)");
export const updateUserFailure = createAction("[User] Update User (failure)");
*/
export const updateUser = data => async dispatch => {
  dispatch(userRequest());
  try {
    console.log(data);
    let token = await dispatch(getChekedToken());
    let user = await Users.updateUser({ data, token });
    console.log(user);
    let { id } = user;
    dispatch(addUsers({ users: { [id]: user } }));
    dispatch(userSuccsess());
  } catch (error) {
    console.log(error);
    dispatch(userFailure(error));
  }
};

export const updateUserAvatar = data => async dispatch => {
  dispatch(userRequest());
  try {
    console.log(data);
    let token = await dispatch(getChekedToken());
    let user = await Users.updateUserAvatar({ data, token });
    console.log(user);
    let { id } = user;
    dispatch(addUsers({ users: { [id]: user } }));
    dispatch(userSuccsess());
  } catch (error) {
    console.log(error);
    dispatch(userFailure(error));
  }
};
