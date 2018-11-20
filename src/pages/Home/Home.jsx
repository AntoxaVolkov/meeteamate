import "./Home.scss";

import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import RegisterFormContainer from "containers/RegisterFormContainer";
import HomeTopBlock from "components/HomeTopBlock";

export default class Home extends Component {
  render() {
    return (
      <div className="home-pege">
        <HomeTopBlock />
        <Container>
          <RegisterFormContainer className="home-page__register-form" />
          <p className="home-pege__text">It is Home Page. =)</p>
        </Container>
      </div>
    );
  }
}
