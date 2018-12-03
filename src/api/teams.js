import { normalize, schema } from "normalizr";
import { publicFetch, castomFetch, formDataFetch } from "./fetch";

const team = new schema.Entity("teams");

function getTeam(tid, token) {
  return castomFetch(`teams/${tid}`, "GET", "", token);
}

async function getTeams({ page = 1, limit = 10, token }) {
  try {
    let teams = await castomFetch(
      `teams?page=${page}&limit=${limit}`,
      "GET",
      "",
      token
    );
    return Promise.resolve(normalize(teams, { teams: [team] }));
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateTeam({ data, token }) {
  try {
    let team = await formDataFetch(
      `teams/${data.tid}`,
      "PUT",
      data.formdata,
      token
    );
    if (team.id) {
      return Promise.resolve(team);
    } else {
      return Promise.reject(team);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

async function createTeam({ data, token }) {
  console.log(data);
  try {
    let team = await formDataFetch(`teams`, "POST", data, token);
    if (team.id) {
      return Promise.resolve(team);
    } else {
      return Promise.reject(team);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
/*
async function updateUserAvatar({ data, token }) {
  try {
    let user = await fileFetch(
      `users/avatar/${data.get("id")}`,
      "PUT",
      data,
      token
    );
    if (user.id) {
      return Promise.resolve(user);
    } else {
      return Promise.reject(user);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
*/
const Teams = {
  getTeam,
  getTeams,
  updateTeam,
  createTeam
  //updateTeamAvatar
};

export default Teams;
