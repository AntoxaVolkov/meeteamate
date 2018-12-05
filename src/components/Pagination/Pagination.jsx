import "./Pagination.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Pagination extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <div>
        <ul className="pagination">
          <li>
            <a>первая</a>
          </li>
          <li>
            <a>пред</a>
          </li>
          <li>
            <a>след</a>
          </li>
          <li>
            <a>последняя</a>
          </li>
        </ul>
      </div>
    );
  }
}
