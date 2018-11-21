import "./Profile.scss";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object,
    className: PropTypes.string,
    self: PropTypes.string
  };
  render() {
    let { user, className } = this.props;
    const profileClass = classNames("profile", className);

    let src = `http://ror-jwt.herokuapp.com${user.picture.thumb.url}`;
    return (
      <div className={profileClass}>
        <Container>
          <Segment>
            <Image src={src} size="medium" circular />
            <Link to="/profile/edit">Редактировать</Link>
            <table>
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <td>ID</td>
                  <td>{user.id}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Fullname</td>
                  <td>{user.fullname}</td>
                </tr>
                <tr>
                  <td>About</td>
                  <td>{user.about}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{user.city}</td>
                </tr>
                <tr>
                  <td>Birthday</td>
                  <td>{user.birthday}</td>
                </tr>
              </tbody>
            </table>
          </Segment>
        </Container>
      </div>
    );
  }
}
