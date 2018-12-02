import { handleActions } from "redux-actions";

import { addTeams } from "actions/actionsTeams";

const initialState = {
  items: {}
};

export default handleActions(
  {
    [addTeams]: (state, { payload: { teams } }) => {
      return {
        items: { ...state.items, ...teams }
      };
    }
  },
  initialState
);
