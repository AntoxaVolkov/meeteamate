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
    onClick: PropTypes.func,
    page: PropTypes.number
  };

  static defaultProps = {};

  setPage = () => {
    this.props.onClick();
  };

  render() {
    const { pages, page } = this.props;

    return (
      <div>
        <ul className="pagination">
          <li>
            <Link to="/search/1" onClick={this.setPage}>
              первая
            </Link>
          </li>
          <li>
            <Link
              to={`/search/${page - 1 < 1 ? page : page - 1}`}
              onClick={this.setPage}
            >
              пред
            </Link>
          </li>
          <li>
            <Link
              to={`/search/${page + 1 > pages ? page : page + 1}`}
              onClick={this.setPage}
            >
              след
            </Link>
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
