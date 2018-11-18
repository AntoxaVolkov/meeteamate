export const baseUrlApi = "http://ror-jwt.herokuapp.com/";

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else if (response.status === 401) {
    return Promise.reject({ error: "Unauthorized", status: 401 });
  } else if (response.status === 400) {
    return parseJSON(response).then(data =>
      Promise.reject({ error: "Bad Request", status: 400, data })
    );
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

export function parseJSON(response) {
  return response.json();
}

export function authFetch(options) {
  const header = {};

  return fetch(header, options)
    .then()
    .then();
}

export function publicFetch(pathAPI, method, data) {
  return fetch(`${baseUrlApi}${pathAPI}`, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(checkHttpStatus)
    .then(parseJSON);
}

export function castomFetch(pathAPI, method, data, token) {
  const conf = { method: "GET" };

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  if (method) {
    conf["method"] = method;
  }

  if (data) {
    conf["body"] = JSON.stringify(data);
  }

  conf["headers"] = headers;

  return fetch(`${baseUrlApi}${pathAPI}`, conf)
    .then(checkHttpStatus)
    .then(parseJSON);
}
