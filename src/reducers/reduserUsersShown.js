import { handleActions } from "redux-actions";

import {
  usersRequest,
  usersSuccsess,
  usersFailure
} from "actions/actionsUsers";

const initialState = {
  users: [],
  isFetching: false,
  didInvalidate: false
};

export default handleActions(
  {
    [usersRequest]: state => {
      return {
        ...state,
        isLoading: true,
        didInvalidate: false
      };
    },
    [usersSuccsess]: (state, { payload: { users } }) => {
      return {
        ...state,
        users: users,
        isLoading: false,
        didInvalidate: false
      };
    },
    [usersFailure]: state => {
      return {
        ...state,
        didInvalidate: true,
        isLoading: false
      };
    }
  },
  initialState
);
