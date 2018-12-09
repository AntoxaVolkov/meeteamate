import { handleActions } from "redux-actions";

import {
  newError,
  newSuccsess,
  newWarning,
  newInfo,
  newNoty,
  removeNoty
} from "actions/actionsNotifications";

const initialState = {
  items: {}
};

export default handleActions(
  {
    [newError]: (state, { payload }) => {
      return {
        items: { ...state.items, [payload.id]: { ...payload, type: "error" } }
      };
    },
    [newSuccsess]: (state, { payload }) => {
      return {
        items: {
          ...state.items,
          [payload.id]: { ...payload, type: "success" }
        }
      };
    },
    [newWarning]: (state, { payload }) => {
      return {
        items: { ...state.items, [payload.id]: { ...payload, type: "warning" } }
      };
    },
    [newInfo]: (state, { payload }) => {
      return {
        items: { ...state.items, [payload.id]: { ...payload, type: "info" } }
      };
    },
    [newNoty]: (state, { payload }) => {
      return {
        items: { ...state.items, [payload.id]: { ...payload } }
      };
    },
    [removeNoty]: (state, { payload: { id } }) => {
      const newState = { items: {} };
      Object.keys(state.items).forEach(key => {
        if (+key !== id) newState.items[key] = state.items[key];
      });

      return { ...newState };
    }
  },
  initialState
);

export const getNotifications = state => {
  return Object.keys(state.notifications.items).map(key => {
    return state.notifications.items[key];
  });
};
