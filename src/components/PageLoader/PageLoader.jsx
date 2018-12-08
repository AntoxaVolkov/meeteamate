import "./PageLoader.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Loader } from "semantic-ui-react";

export default class PageLoader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool
  };

  static defaultProps = {
    active: false,
    className: ""
  };

  render() {
    let { active, className } = this.props;
    const loaderClass = classNames("page-loader", className);
    return (
      <div className={loaderClass}>
        <Loader active={active} inline="centered">
          Loading
        </Loader>
      </div>
    );
  }
}
