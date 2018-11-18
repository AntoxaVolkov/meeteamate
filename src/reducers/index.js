import { combineReducers } from "redux";

import reducerUsers from "./reduserUsers";
import reducerAuth from "./reduserAuth";
import reducerRegister from "./reduserRegister";

export default combineReducers({
  users: reducerUsers,
  auth: reducerAuth,
  register: reducerRegister
});
