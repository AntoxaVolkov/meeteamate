import { handleActions } from "redux-actions";

import {
  registerRequest,
  registerSuccess,
  registerFailure
} from "actions/actionsRegister";

const initialState = {
  isFetching: false,
  errorField: null,
  didInvalidate: false
};

export default handleActions(
  {
    [registerRequest]: (state, action) => {
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    },
    [registerSuccess]: (state, { payload: { token, userId } }) => {
      return {
        isFetching: false,
        errorField: null,
        didInvalidate: false
      };
    },
    [registerFailure]: (state, { payload: { errorField } }) => {
      return {
        ...state,
        didInvalidate: true,
        isFetching: false,
        errorField
      };
    }
  },
  initialState
);
