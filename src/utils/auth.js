import decode from "jwt-decode";

export const getCheckedAccessToken = function() {
  let token = sessionStorage.getItem("access_token");

  if (token) {
    let payload = decode(token);
    let exp = new Date(payload["exp"] * 1000);
    let now = new Date();

    return exp - now > 10000 ? token : false;
  } else {
    return false;
  }
};
