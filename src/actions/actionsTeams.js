import { createAction } from "redux-actions";

import { getChekedToken } from "actions/actionsAuth";
import Teams from "api/teams";

export const teamsRequest = createAction("[Teams] Load  (request)");
export const teamsSuccsess = createAction("[Teams] Load (succsess)");
export const teamsFailure = createAction("[Teams] Load (failure)");

export const getTeams = ({ page, limit }) => async dispatch => {
  try {
    dispatch(teamsRequest());
    let token = await dispatch(getChekedToken());
    let { entities, result } = await Teams.getTeams({ page, limit, token });
    console.log(entities, result);
    dispatch(addTeams({ teams: entities.teams }));
    dispatch(teamsSuccsess({ count: result.count, teams: result.teams }));
  } catch (error) {
    console.log(error);
    dispatch(teamsFailure(error));
    return Promise.reject(error);
  }
};

export const teamRequest = createAction("[Team] Get  (request)");
export const teamSuccsess = createAction("[Team] Get (succsess)");
export const teamFailure = createAction("[Team] Get (failure)");
export const teamClear = createAction("[Team] Clear");

export const getTeam = uid => async dispatch => {
  dispatch(teamRequest());
  try {
    let token = await dispatch(getChekedToken());
    let team = await Teams.getTeam(uid, token);
    let { id } = team;
    dispatch(addTeams({ teams: { [id]: team } }));
    dispatch(teamSuccsess({ id }));
  } catch (error) {
    console.log(error);
    dispatch(teamFailure(error));
  }
};
/*
export const updateTeamRequest = createAction("[Team] Update Team  (request)");
export const updateTeamSuccsess = createAction("[Team] Update Team (succsess)");
export const updateTeamFailure = createAction("[Team] Update Team (failure)");
*/
export const updateTeam = data => async dispatch => {
  dispatch(teamRequest());
  try {
    console.log(data);
    let token = await dispatch(getChekedToken());
    let team = await Teams.updateTeam({ data, token });
    console.log(team);
    let { id } = team;
    dispatch(addTeams({ teams: { [id]: team } }));
    dispatch(teamSuccsess({ id }));
  } catch (error) {
    console.log(error);
    dispatch(teamFailure(error));
  }
};

export const createTeam = data => async dispatch => {
  dispatch(teamRequest());
  try {
    console.log(data);
    let token = await dispatch(getChekedToken());
    let team = await Teams.createTeam({ data, token });
    console.log(team);
    let { id } = team;
    dispatch(addTeams({ teams: { [id]: team } }));
    dispatch(teamSuccsess({ id }));
  } catch (error) {
    console.log(error);
    dispatch(teamFailure(error));
  }
};

export const addTeams = createAction("[Teams] Add Teams");
