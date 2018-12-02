import { combineReducers } from "redux";

import reducerUsers from "./reduserUsers";
import reducerUser from "./reduserUser";
import reduserUsersShown from "./reduserUsersShown";

import reducerTeams from "./reduserTeams";
import reducerTeam from "./reduserTeam";
import reduserTeamsShown from "./reduserTeamsShown";

import reducerAuth from "./reduserAuth";
import reducerRegister from "./reduserRegister";

export default combineReducers({
  users: reducerUsers,
  user: reducerUser,
  usersShown: reduserUsersShown,
  teams: reducerTeams,
  team: reducerTeam,
  teamsShown: reduserTeamsShown,
  auth: reducerAuth,
  register: reducerRegister
});
