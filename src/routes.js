import Home from "pages/Home";
import Profile from "pages/Profile";
import ProfileEdit from "pages/ProfileEdit";
import Login from "pages/Login";
import Search from "pages/Search";
import NotFound from "pages/NotFound";
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
    path: "/profile/:id",
    component: ProtectingContainer(Profile),
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
  },
  {
    path: "/search",
    component: ProtectingContainer(Search),
    exact: true
  },
  {
    path: "/search/users",
    component: ProtectingContainer(Search)
  },
  {
    component: NotFound
  }
];
