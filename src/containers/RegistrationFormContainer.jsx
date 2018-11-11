import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Input from "components/Input";
import Button from "components/Button";

export default class RegistrationFormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: "",
        email: "",
        password: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  static propTypes = {};

  static defaultProps = {};

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    e.preventDefault();
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    fetch("http://ror-jwt.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      res.json().then(data => {
        console.log(data);
      });
    });
  }

  render() {
    const {} = this.props;

    return (
      <form>
        <Input
          inputtype={"text"}
          title={"Ваш nickname:"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Naikaric"}
          handlechange={this.handleInput}
        />
        <Input
          inputtype={"email"}
          title={"Ваш email:"}
          name={"email"}
          value={this.state.newUser.email}
          placeholder={"example@email.com"}
          handlechange={this.handleInput}
        />
        <Input
          inputtype={"password"}
          title={"Ваш пароль:"}
          name={"password"}
          value={this.state.newUser.password}
          handlechange={this.handleInput}
        />
        <Button action={this.handleFormSubmit} title={"Зарегистрироваться"} />
      </form>
    );
  }
}
