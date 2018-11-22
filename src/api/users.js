import { normalize, schema } from "normalizr";
import {
  baseUrlApi,
  checkHttpStatus,
  parseJSON,
  publicFetch,
  castomFetch
} from "./fetch";

const user = new schema.Entity("users");

function auth({ email, password }) {
  let body = encodeURI(`email=${email}&password=${password}`);
  return fetch(`${baseUrlApi}auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  })
    .then(checkHttpStatus)
    .then(parseJSON);
}

function refresh(refreshToken) {
  return fetch(`${baseUrlApi}auth/refresh`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${refreshToken}`
    }
  })
    .then(checkHttpStatus)
    .then(parseJSON);
}

function register(userData) {
  return publicFetch("auth/register", "POST", userData);
}

function getUser(uid, token) {
  return castomFetch(`users/${uid}`, "GET", "", token);
}

async function getUsers({ page = "", token }) {
  try {
    let users = await castomFetch(`users?page=${page}`, "GET", "", token);
    return Promise.resolve(normalize({ users }, { users: [user] }));
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateUser({ data, token }) {
  try {
    let user = await castomFetch(`users/${data.id}`, "PUT", data, token);
    if (user.id) {
      return Promise.resolve(user);
    } else {
      return Promise.reject(user);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

const Users = {
  auth,
  refresh,
  register,
  getUser,
  getUsers,
  updateUser
};

export default Users;
