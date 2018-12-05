import "./Pagination.scss";

import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Pagination extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    pages: PropTypes.number,
    onClick: PropTypes.func
  };

  static defaultProps = {};

  setPage = () => {
    this.props.onClick();
  };

  render() {
    const { pages } = this.props;

    return (
      <div>
        <ul className="pagination">
          <li>
            <Link to="/search/1" onClick={this.setPage}>
              первая
            </Link>
          </li>
          <li>
            <a>пред</a>
          </li>
          <li>
            <a>след</a>
          </li>
          <li>
            <Link to={`/search/${pages}`} onClick={this.setPage}>
              последняя
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
