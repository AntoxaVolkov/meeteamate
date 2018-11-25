import "./RegisterForm.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Checkbox, Form, Message } from "semantic-ui-react";

export default class RegisterForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { password: "", email: "", username: "" };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  static propTypes = {
    className: PropTypes.string,
    isFetching: PropTypes.bool,
    errorField: PropTypes.object,
    isError: PropTypes.bool,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    className: ""
  };

  handleSubmit = () => {
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { className, isFetching, errorField, isError } = this.props;
    const registerFormClass = classNames("register-form " + className);
    const msgClasss = classNames({
      visible: isError
    });

    return (
      <div className={registerFormClass}>
        <Form loading={isFetching} onSubmit={this.handleSubmit}>
          <Message
            error
            className={msgClasss}
            header="Ошибка при регистрации"
            content="Одно из полей заполнено не верно"
          />
          <Form.Field>
            <label className="register-form__label">ИМЯ:</label>
            <input
              className="register-form__input"
              name="username"
              onChange={this.handleChange}
              type="text"
              placeholder="Кешка"
            />
          </Form.Field>
          <Form.Field>
            <label className="register-form__label">EMAIL:</label>
            <input
              className="register-form__input"
              name="email"
              onChange={this.handleChange}
              type="email"
              placeholder="example@mail.ru"
            />
          </Form.Field>
          <Form.Field>
            <label className="register-form__label">ПАРОЛЬ:</label>
            <input
              className="register-form__input"
              name="password"
              onChange={this.handleChange}
              type="password"
            />
          </Form.Field>
          <Form.Button
            positive
            content="ЗАРЕГИСТРИРОВАТЬСЯ"
            className="register-form__submit"
          />
        </Form>
      </div>
    );
  }
}
