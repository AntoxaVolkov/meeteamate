import "./Profile.scss";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Segment, Grid } from "semantic-ui-react";
import Avatar from "components/Avatar";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object,
    className: PropTypes.string,
    self: PropTypes.bool
  };
  render() {
    let { user, className } = this.props;
    const profileClass = classNames("profile", className);

    let src = `http://ror-jwt.herokuapp.com${user.picture.thumb.url}`;
    return (
      <div className={profileClass}>
        <Container className="profile__header">
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={4}>
                <div className="profile__column">
                  <Avatar className="profile__avatar" url={src} />
                  <Link className="ui primary button" to="/profile/edit">
                    Редактировать
                  </Link>
                </div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div className="profile__fullname">{user.fullname}</div>
                <div className="profile__username">{user.username}</div>
                <div className="profile__city">{user.city}</div>
                <div className="profile__about">{user.about}</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Segment className="profile__segment" />
        </Container>
      </div>
    );
  }
}
