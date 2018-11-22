import "./ProfileEdit.scss";

import React, { Component } from "react";
import { Container, Form, Input, Segment, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class ProfileEdit extends Component {
  static propTypes = {
    user: PropTypes.object,
    className: PropTypes.string,
    onSubmit: PropTypes.func
  };

  state = {
    username: "",
    email: "",
    fullname: "",
    city: "",
    birthday: "",
    about: ""
  };

  componentDidMount() {
    let { user } = this.props;
    Object.keys(user).forEach(key => {
      user[key] = user[key] || "";
    });
    this.setState({ ...this.state, ...user });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    let { id, username, email, fullname, city, birthday, about } = this.state;
    this.props.onSubmit({
      id,
      username,
      email,
      fullname,
      city,
      birthday,
      about
    });
  };

  render() {
    let { className } = this.props;
    const profileClass = classNames("profile-edit-form", className);

    //let src = `http://ror-jwt.herokuapp.com${user.picture.thumb.url}`;
    return (
      <Form className={profileClass} onSubmit={this.handleSubmit}>
        <Segment>
          <div className="profile-edit-form__field">
            <label className="profile-edit-form__label">Имя пользователя</label>
            <Input
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
              className="profile-edit-form__input"
              placeholder="Kesha"
            />
            .
          </div>
          <div className="profile-edit-form__field">
            <label className="profile-edit-form__label">Email</label>
            <Input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              className="profile-edit-form__input"
              placeholder="example@mail.ru"
            />
          </div>
          <div className="profile-edit-form__field">
            <label className="profile-edit-form__label">Ваше полное имя</label>
            <Input
              value={this.state.fullname}
              onChange={this.handleChange}
              name="fullname"
              className="profile-edit-form__input"
              placeholder="Иван Иванов"
            />
          </div>
          <div className="profile-edit-form__field">
            <label className="profile-edit-form__label">Город</label>
            <Input
              value={this.state.city}
              onChange={this.handleChange}
              name="city"
              className="profile-edit-form__input"
              placeholder="Москва"
            />
          </div>
          <div className="profile-edit-form__field">
            <label className="profile-edit-form__label">Дата рождения</label>
            <Input
              value={this.state.birthday}
              onChange={this.handleChange}
              name="birthday"
              className="profile-edit-form__input"
              placeholder="01.01.1990"
            />
          </div>
          <div className="profile-edit-form__field">
            <label className="profile-edit-form__label">О себе</label>
            <Form.TextArea
              name="about"
              value={this.state.about}
              onChange={this.handleChange}
              className="profile-edit-form__input"
              placeholder="Расскажите о себе..."
            />
          </div>
          <div className="profile-edit-form__field --center">
            <Button primary>Сохранить</Button>
          </div>
        </Segment>
      </Form>
    );
  }
}
