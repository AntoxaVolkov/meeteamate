import { handleActions } from "redux-actions";

import {
  loadUsersRequest,
  loadUsersSuccsess,
  loadUsersFailure
} from "actions/actionsUsers";

const initialState = {
  users: [],
  currentPage: 1,
  count: 0,
  isLoading: false,
  didInvalidate: false
};

export default handleActions(
  {
    [loadUsersRequest]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        didInvalidate: false
      };
    },
    [loadUsersSuccsess]: (state, action) => {
      let { currentPage } = action;
      let { users, count } = action.response;
      users =
        currentPage > state.currentPage ? state.users.concat(users) : users;
      return {
        ...state,
        users,
        count,
        currentPage,
        isLoading: false,
        didInvalidate: false
      };
    },
    [loadUsersFailure]: (state, action) => {
      return {
        ...state,
        didInvalidate: true
      };
    }
  },
  initialState
);
