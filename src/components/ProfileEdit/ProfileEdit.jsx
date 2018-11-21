import "./ProfileEdit.scss";

import React, { Component } from "react";
import { Container, Form, Input, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class ProfileEdit extends Component {
  static propTypes = {
    user: PropTypes.object,
    className: PropTypes.string
  };
  render() {
    let { user, className } = this.props;
    const profileClass = classNames("profile-edit-form", className);

    let src = `http://ror-jwt.herokuapp.com${user.picture.thumb.url}`;
    return (
      <Container>
        <Form className={profileClass}>
          <Segment>
            <Form.Field className="profile-edit-form__field">
              <label className="profile-edit-form__label">
                Имя пользователя
              </label>
              <Input
                value={user.username}
                className="profile-edit-form__input"
              />
            </Form.Field>
            <Form.Field className="profile-edit-form__field">
              <label className="profile-edit-form__label">Email</label>
              <Input
                type="email"
                value={user.email}
                className="profile-edit-form__input"
              />
            </Form.Field>
            <Form.Field className="profile-edit-form__field">
              <label className="profile-edit-form__label">
                Ваше полное имя
              </label>
              <Input
                value={user.fullname}
                className="profile-edit-form__input"
              />
            </Form.Field>
            <Form.Field className="profile-edit-form__field">
              <label className="profile-edit-form__label">Ваш город</label>
              <Input value={user.city} className="profile-edit-form__input" />
            </Form.Field>
          </Segment>
        </Form>
        <Segment>
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
    );
  }
}
