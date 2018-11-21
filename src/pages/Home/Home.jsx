import "./Home.scss";

import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import HomeTopBlock from "components/HomeTopBlock";
import HomeBottomBlock from "components/HomeBottomBlock";

export default class Home extends Component {
  render() {
    return (
      <div className="home-pege">
        <HomeTopBlock />
        <Container>
          <p className="home-pege__text">It is Home Page. =)</p>
        </Container>
        <HomeBottomBlock />
      </div>
    );
  }
}
