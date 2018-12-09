import "./UserFilter.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Form, Select } from "semantic-ui-react";

export default class UserFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  func = (e, data) => {
    console.log(data.value);
  };

  render() {
    const {} = this.props;

    const countryOptions = [
      { key: "ru", text: "Россия", value: "russia" },
      { key: "uk", text: "Украина", value: "ukraine" },
      { key: "by", text: "Белоруссия", value: "byelorussia" },
      { key: "us", text: "США", value: "usa" }
    ];

    const cityOptions = [
      { key: "mos", text: "Москва", value: "programming" },
      { key: "spb", text: "Санкт-Петербург", value: "saint-petersburg" }
    ];

    return (
      <div className="filter">
        <Form>
          <Form.Field
            onChange={this.func}
            control={Select}
            options={countryOptions}
            label={{
              htmlFor: "form-select-control-country"
            }}
            placeholder="Страна"
            search
            searchInput={{ id: "form-select-control-country" }}
          />
          <Form.Field
            onChange={this.func}
            control={Select}
            options={cityOptions}
            label={{
              htmlFor: "form-select-control-city"
            }}
            placeholder="Город"
            search
            searchInput={{ id: "form-select-control-city" }}
          />
        </Form>
      </div>
    );
  }
}
