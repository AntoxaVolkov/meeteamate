import "./Profile.scss";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Segment, Grid, Icon } from "semantic-ui-react";
import Avatar from "components/Avatar";
import UserTeams from "components/UserTeams";
import PropTypes from "prop-types";
import classNames from "classnames";
import { confApi } from "configApp";

import ShowSelf from "containers/ShowSelf";
import ShowExceptSelf from "containers/ShowExceptSelf";

export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object,
    className: PropTypes.string,
    self: PropTypes.bool
  };
  render() {
    let { user, className, self } = this.props;
    const profileClass = classNames("profile", className);

    let src = confApi.baseUrl + user.picture.thumb.url;
    return (
      <div className={profileClass}>
        <Container>
          <Grid className="profile__header" columns={2}>
            <Grid.Row>
              <Grid.Column width={4}>
                <div className="profile__column">
                  <Avatar className="profile__avatar" url={src} />
                  <ShowSelf uid={user.id}>
                    <Link className="ui primary button" to="/profile/edit">
                      Редактировать
                    </Link>
                  </ShowSelf>
                  <ShowExceptSelf>Пригласить</ShowExceptSelf>
                </div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div className="profile__fullname">{user.fullname}</div>
                <div className="profile__username">{user.username}</div>
                <div className="profile__city">
                  <Icon name="map marker alternate" />
                  {user.city}
                </div>
                <div className="profile__about">{user.about}</div>
              </Grid.Column>
            </Grid.Row>
            <Segment className="profile__segment" />
          </Grid>
          <UserTeams self={self} />
        </Container>
      </div>
    );
  }
}
