import { handleActions } from "redux-actions";

import {
  teamRequest,
  teamSuccsess,
  teamFailure,
  teamClear
} from "actions/actionsTeams";

const initialState = {
  id: null,
  isFetching: false,
  didInvalidate: false
};

export default handleActions(
  {
    [teamRequest]: state => {
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    },
    [teamSuccsess]: (state, { payload: { id } }) => {
      return {
        ...state,
        id,
        isFetching: false,
        didInvalidate: false
      };
    },
    [teamFailure]: state => {
      return {
        ...state,
        didInvalidate: true,
        isFetching: false
      };
    },
    [teamClear]: state => {
      return {
        id: null,
        didInvalidate: false,
        isFetching: false
      };
    }
  },
  initialState
);
