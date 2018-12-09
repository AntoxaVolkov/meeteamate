import { createAction } from "redux-actions";

const generateId = ({ title, msg }) => {
  return { title, msg, id: Date.now() };
};

export const newError = createAction("[Notifications] New Error", generateId);
export const newSuccsess = createAction(
  "[Notifications] New Succsess",
  generateId
);
export const newWarning = createAction(
  "[Notifications] New Warning",
  generateId
);
export const newInfo = createAction("[Notifications] New Info", generateId);
export const newNoty = createAction("[Notifications] New Noty", generateId);

export const removeNoty = createAction("[Notifications] Delete");
