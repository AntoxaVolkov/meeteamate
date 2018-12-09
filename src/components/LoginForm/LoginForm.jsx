import "./LoginForm.scss";

import React, { PureComponent } from "react";
import { Checkbox, Form, Message } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class LoginForm extends PureComponent {
  state = { password: "", email: "", noremember: false };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  toggle = () => this.setState({ noremember: !this.state.checked });
  handleSubmit = () => {
    let { email, password, noremember } = this.state;
    this.props.onSubmit({ email, password, noremember });
  };

  static propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    isAuthenticating: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    didInvalidate: PropTypes.bool,
    redirectPath: PropTypes.string,
    location: PropTypes.object
  };

  static defaultProps = {
    className: ""
  };

  render() {
    const {
      className,
      isAuthenticating,
      didInvalidate,
      redirectPath,
      location,
      isAuthenticated
    } = this.props;
    const loginFormClass = classNames("login-form " + className);
    const msgClasss = classNames({
      visible: didInvalidate
    });
    const form = (
      <div className={loginFormClass}>
        <Form loading={isAuthenticating} onSubmit={this.handleSubmit}>
          <Message
            error
            className={msgClasss}
            header="Ошибка авторизации"
            content="Не верный логин или пароль."
          />
          <Form.Field>
            <label>Email</label>
            <input
              className="login-form__input"
              name="email"
              onChange={this.handleChange}
              type="email"
              placeholder="example@mail.ru"
            />
          </Form.Field>
          <Form.Field>
            <label>Пароль</label>
            <input
              className="login-form__input"
              name="password"
              onChange={this.handleChange}
              type="password"
            />
          </Form.Field>
          <Form.Field>
            <Checkbox onChange={this.toggle} label="Чужой компьютер" />
          </Form.Field>
          <Form.Button positive content="Войти" />
        </Form>
      </div>
    );
    const redirect = (
      <Redirect
        to={{
          pathname: redirectPath,
          state: { from: location }
        }}
      />
    );

    return !isAuthenticated ? form : redirect;
  }
}
