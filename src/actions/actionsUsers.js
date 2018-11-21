import { createAction } from "redux-actions";

import { getChekedToken } from "actions/actionsAuth";
import Users from "api/users";

export const usersRequest = createAction("[Users] Load  (request)");
export const usersSuccsess = createAction("[Users] Load (succsess)");
export const usersFailure = createAction("[Users] Load (failure)");

export const loadUsers = page => async dispatch => {
  try {
    dispatch(usersRequest());
    let token = await dispatch(getChekedToken());
    let response = await Users.getUsers({ token });
    dispatch(addUsers({ users: response.entities.users }));
    dispatch(usersSuccsess(response.result));
  } catch (error) {
    console.log(error);
    dispatch(usersFailure(error));
    return Promise.reject(error);
  }
};

export const addUsers = createAction("[Users] Add Users");
