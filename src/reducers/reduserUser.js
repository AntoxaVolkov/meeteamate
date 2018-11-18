import { handleActions } from "redux-actions";

import { userRequest, userSuccsess, userFailure } from "actions/actionsUser";

const initialState = {
  userId: null,
  email: null,
  isFetching: false,
  didInvalidate: false
};

export default handleActions(
  {
    [userRequest]: state => {
      return {
        ...state,
        isLoading: true,
        didInvalidate: false
      };
    },
    [userSuccsess]: (state, { payload: { userId, email } }) => {
      return {
        ...state,
        userId,
        email,
        isLoading: false,
        didInvalidate: false
      };
    },
    [userFailure]: state => {
      return {
        ...state,
        didInvalidate: true,
        isLoading: false
      };
    }
  },
  initialState
);
