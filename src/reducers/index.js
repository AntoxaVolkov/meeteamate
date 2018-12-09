import { combineReducers } from "redux";

import reducerUsers from "./users";
import reducerUser from "./user";
import reduserUsersShown from "./usersShown";

import reducerTeams from "./teams";
import reducerTeam from "./team";
import reduserTeamsShown from "./teamsShown";

import reducerAuth from "./auth";
import reducerRegister from "./register";

import notifications from "./notifications";

export default combineReducers({
  users: reducerUsers,
  user: reducerUser,
  usersShown: reduserUsersShown,
  teams: reducerTeams,
  team: reducerTeam,
  teamsShown: reduserTeamsShown,
  auth: reducerAuth,
  register: reducerRegister,
  notifications
});
