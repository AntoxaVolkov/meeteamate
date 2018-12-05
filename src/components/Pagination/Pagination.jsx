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

  firstPage = () => {
    this.props.onClick(1);
  };

  prevPage = () => {
    let page = +location.pathname.split("/")[2] - 1;
    page < 1 ? (page = 1) : (page = page);
    this.props.onClick(page);
  };

  nextPage = () => {
    let page = +location.pathname.split("/")[2] + 1;
    page > this.props.pages ? (page = this.props.pages) : (page = page);
    this.props.onClick(page);
  };

  lastPage = () => {
    this.props.onClick(this.props.pages);
  };

  render() {
    const { pages, page } = this.props;

    return (
      <div>
        <ul className="pagination">
          <li>
            <Link to="/search/1" onClick={this.firstPage}>
              первая
            </Link>
          </li>
          <li>
            <Link
              to={`/search/${page - 1 < 1 ? page : page - 1}`}
              onClick={this.prevPage}
            >
              пред
            </Link>
          </li>
          <li>
            <Link
              to={`/search/${page + 1 > pages ? page : page + 1}`}
              onClick={this.nextPage}
            >
              след
            </Link>
          </li>
          <li>
            <Link to={`/search/${pages}`} onClick={this.lastPage}>
              последняя
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
