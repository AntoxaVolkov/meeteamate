import "./Home.scss";

import React, { Component } from "react";
import { Container } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <div className="home-pege">
        <Container>
          <p className="home-pege__text">It is Home Page. =)</p>
        </Container>
      </div>
    );
  }
}
