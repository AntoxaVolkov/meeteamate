import Home from "pages/Home";
import Profile from "pages/Profile";
import Registration from "pages/Registration";

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
  },
  {
    path: "/registration",
    component: Registration,
    exact: true
  }
];
