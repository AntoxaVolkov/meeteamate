import { combineReducers } from "redux";

import reducerUsers from "./reduserUsers";

export default combineReducers({
  users: reducerUsers
});
