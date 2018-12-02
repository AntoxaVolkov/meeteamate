import Home from "pages/Home";
import Profile from "pages/Profile";
import ProfileEdit from "pages/ProfileEdit";
import Login from "pages/Login";
import Team from "pages/Team";
import TeamEdit from "pages/TeamEdit";

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
    path: "/profile/edit",
    component: ProtectingContainer(ProfileEdit),
    exact: true
  },
  {
    path: "/profile",
    component: ProtectingContainer(Profile),
    exact: true
  },
  {
    path: "/team",
    component: Team,
    exact: true
  },
  {
    path: "/team/edit",
    component: /* TeamleadOnlyContainer */ TeamEdit,
    exact: true
  }
];
