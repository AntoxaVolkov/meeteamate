import { handleActions } from "redux-actions";

import { userRequest, userSuccsess, userFailure } from "actions/actionsUser";

const initialState = {
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
    [userSuccsess]: state => {
      return {
        ...state,
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
    }
  },
  initialState
);
