import { handleActions } from "redux-actions";

import {
  userRequest,
  userSuccsess,
  userFailure,
  userClear
} from "actions/actionsUser";

const initialState = {
  id: null,
  isFetching: false,
  didInvalidate: false
};

export default handleActions(
  {
    [userRequest]: state => {
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    },
    [userSuccsess]: (state, { payload: { id } }) => {
      return {
        ...state,
        id,
        isFetching: false,
        didInvalidate: false
      };
    },
    [userFailure]: state => {
      return {
        ...state,
        didInvalidate: true,
        isFetching: false
      };
    },
    [userClear]: state => {
      return {
        id: null,
        didInvalidate: false,
        isFetching: false
      };
    }
  },
  initialState
);
