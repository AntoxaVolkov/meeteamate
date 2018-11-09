import { createAction } from "redux-actions";

import usersAPI from "api/users";

// Пример
export const loadListUsers = dispatch => (limit, currentPage) => {
  dispatch(loadUsersRequest()); // Говорим что загрузка пользователей началась
  usersAPI
    .getUsers(limit, currentPage)
    .then(res => {
      dispatch(loadUsersSuccsess(res)); // Говорим что загрузка пользователей завершилась успехом, и передаем список
    })
    .catch(error => {
      dispatch(loadUsersFailure(error)); // Говорим что загрузка пользователей завершилась неудачей, и передаем ошибку
    });
};

export const loadUsersRequest = createAction("[Users] Load  (request)");
export const loadUsersSuccsess = createAction("[Users] Load (succsess)");
export const loadUsersFailure = createAction("[Users] Load (failure)");
