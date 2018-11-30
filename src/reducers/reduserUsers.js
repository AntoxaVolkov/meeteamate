import { handleActions } from "redux-actions";

import { addUsers } from "actions/actionsUsers";

const initialState = {
  items: {}
};

export default handleActions(
  {
    [addUsers]: (state, { payload: { users } }) => {
      return {
        items: { ...state.items, ...users }
      };
    }
  },
  initialState
);
