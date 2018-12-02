import { handleActions } from "redux-actions";

import {
  teamsRequest,
  teamsSuccsess,
  teamsFailure
} from "actions/actionsTeams";

const initialState = {
  teams: [],
  count: 0,
  isFetching: false,
  didInvalidate: false
};

export default handleActions(
  {
    [teamsRequest]: state => {
      return {
        ...state,
        isLoading: true,
        didInvalidate: false
      };
    },
    [teamsSuccsess]: (state, { payload: { teams, count } }) => {
      return {
        ...state,
        teams,
        count,
        isLoading: false,
        didInvalidate: false
      };
    },
    [teamsFailure]: state => {
      return {
        ...state,
        didInvalidate: true,
        isLoading: false
      };
    }
  },
  initialState
);
