import "./Input.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    inputtype: PropTypes.string,
    value: PropTypes.string,
    handlechange: PropTypes.func,
    placeholder: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const {
      name,
      title,
      inputtype,
      value,
      handlechange,
      placeholder
    } = this.props;

    return (
      <div className="field">
        <label className="field_label" htmlFor={name}>
          {title}
        </label>
        <input
          className="field_block"
          id={name}
          name={name}
          type={inputtype}
          value={value}
          onChange={handlechange}
          placeholder={placeholder}
          {...this.props}
        />
      </div>
    );
  }
}
