import Home from "pages/Home";
import Profile from "pages/Profile";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/profile",
    component: Profile,
    exact: true
  }
];
