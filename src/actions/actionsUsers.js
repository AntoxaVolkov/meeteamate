import { createAction } from "redux-actions";

import { getChekedToken } from "actions/actionsAuth";
import Users from "api/users";

export const usersRequest = createAction("[Users] Load  (request)");
export const usersSuccsess = createAction("[Users] Load (succsess)");
export const usersFailure = createAction("[Users] Load (failure)");

export const loadUsers = (page, limit) => async dispatch => {
  try {
    dispatch(usersRequest());
    let token = await dispatch(getChekedToken());
    let { data, count } = await Users.getUsers({ page, limit, token });
    console.log(response);
    dispatch(addUsers({ users: data.entities.users }));
    dispatch(usersSuccsess({ usrs: data.result.users, count }));
  } catch (error) {
    console.log(error);
    dispatch(usersFailure(error));
    return Promise.reject(error);
  }
};

export const addUsers = createAction("[Users] Add Users");
