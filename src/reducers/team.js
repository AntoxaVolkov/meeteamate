import { handleActions } from "redux-actions";

import {
  teamRequest,
  teamSuccsess,
  teamFailure,
  teamClear
} from "actions/actionsTeams";

const initialState = {
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
    [teamSuccsess]: state => {
      return {
        ...state,
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
    }
  },
  initialState
);
