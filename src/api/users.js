import {
  baseUrlApi,
  checkHttpStatus,
  parseJSON,
  publicFetch,
  castomFetch
} from "./fetch";

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

function getUser(token) {
  return publicFetch("", "GET", "", token);
}

const Users = {
  auth,
  refresh,
  register,
  getUser
};

export default Users;
