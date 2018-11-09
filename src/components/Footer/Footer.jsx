import "./Footer.scss";

import React, { Component } from "react";
import { Container } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <p className="footer__copy">&copy; MEETEAMATE 2018</p>
        </Container>
      </footer>
    );
  }
}
