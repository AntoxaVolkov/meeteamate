import "./Pagination.scss";

import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Pagination extends PureComponent {
  static propTypes = {
    pages: PropTypes.number,
    page: PropTypes.number,
    className: PropTypes.string,
    pagPath: PropTypes.string
  };

  static defaultProps = {
    className: "",
    pagPath: ""
  };

  render() {
    const { pages, page, className, pagPath } = this.props;
    let pagClass = classNames("pagination", className);
    let linkNextClass = classNames({
      "pagination__link--disable": page + 1 > pages
    });
    let linkPrevClass = classNames({
      "pagination__link--disable": page - 1 < 1
    });

    return (
      <ul className={pagClass}>
        <li>
          <Link
            className={linkPrevClass}
            to={`${pagPath}/1`} //onClick={this.firstPage}
          >
            первая
          </Link>
        </li>
        <li>
          <Link
            className={linkPrevClass}
            to={`${pagPath}/${page - 1 < 1 ? page : page - 1}`}
            // onClick={this.prevPage}
          >
            пред
          </Link>
        </li>
        <li>
          <Link
            className={linkNextClass}
            to={`${pagPath}/${page + 1 > pages ? page : page + 1}`}
            // onClick={this.nextPage}
          >
            след
          </Link>
        </li>
        <li>
          <Link
            className={linkNextClass}
            to={`${pagPath}/${pages}`} //onClick={this.lastPage}
          >
            последняя
          </Link>
        </li>
      </ul>
    );
  }
}
