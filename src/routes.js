import Home from "pages/Home";
import Profile from "pages/Profile";
import Login from "pages/Login";

import ProtectingContainer from "containers/ProtectingContainer";
import GuestOnlyContainer from "containers/GuestOnlyContainer";

export default [
  {
    path: "/",
    component: GuestOnlyContainer(Home),
    exact: true
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/profile",
    component: ProtectingContainer(Profile),
    exact: true
  }
];
