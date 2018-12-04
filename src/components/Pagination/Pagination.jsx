import "./Pagination.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Pagination extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    pages: PropTypes.number,
    loadMore: PropTypes.func
  };

  state = {
    page: 1
  };

  componentDidMount() {
    let { page } = this.props;
    this.setState({ page: page });
  }

  firstPage = () => {
    let { page } = this.state;
    page = 1;
    this.setState({ page: page });
    this.props.loadMore({
      page
    });
  };

  previousPage = () => {
    let { page } = this.state;
    page--;
    this.setState({ page: page });
    this.props.loadMore({
      page
    });
  };

  nextPage = () => {
    let { page } = this.state;
    page++;
    this.setState({ page: page });
    this.props.loadMore({
      page
    });
  };

  lastPage = () => {
    let { page } = this.state;
    let { pages } = this.props;
    page = pages;
    this.setState({ page: page });
    this.props.loadMore({
      page
    });
  };

  setPage = e => {
    let { page } = this.state;
    page = +e.target.innerText;
    this.setState({ page: page });
    this.props.loadMore({
      page
    });
  };

  render() {
    const { pages } = this.props;
    let butPage = [];
    for (let i = 0, j = 1; i < pages; i++) {
      butPage.push(j++);
    }

    return (
      <div>
        <ul className="pagination">
          <li>
            <a onClick={this.firstPage}>первая</a>
          </li>
          <li>
            <a onClick={this.previousPage}>пред</a>
          </li>
          {butPage.map((but, index) => (
            <li key={index}>
              <a onClick={this.setPage}>{but}</a>
            </li>
          ))}
          <li>
            <a onClick={this.nextPage}>след</a>
          </li>
          <li>
            <a onClick={this.lastPage}>последняя</a>
          </li>
        </ul>
      </div>
    );
  }
}
