import { handleActions } from "redux-actions";

import { userRequest, userSuccsess, userFailure } from "actions/actionsUser";

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
    }
  },
  initialState
);
