import { combineReducers } from "redux";

import reducerUsers from "./reduserUsers";
import reducerUser from "./reduserUser";
import reduserUsersShown from "./reduserUsersShown";
import reducerAuth from "./reduserAuth";
import reducerRegister from "./reduserRegister";

export default combineReducers({
  users: reducerUsers,
  user: reducerUser,
  auth: reducerAuth,
  register: reducerRegister,
  usersShown: reduserUsersShown
});
