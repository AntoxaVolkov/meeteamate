import { handleActions } from "redux-actions";

import { addUsers } from "actions/actionsUsers";

const initialState = {
  items: {}
};

export default handleActions(
  {
    [addUsers]: (state, { payload: { users } }) => {
      console.log(users);
      return {
        items: { ...state.items, ...users }
      };
    }
  },
  initialState
);
