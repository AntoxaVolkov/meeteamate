import "./Filter.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Form, Select } from "semantic-ui-react";

export default class Filter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    search: PropTypes.string
  };

  static defaultProps = {};
  func = (e, data) => {
    console.log(data.value);
  };

  render() {
    const { search } = this.props;

    const categoryOptions = [
      { key: "p", text: "Программирование", value: "programming" },
      { key: "g", text: "Садоводство", value: "gardening" },
      { key: "c", text: "Кулинария", value: "cooking" },
      { key: "b", text: "Бизнес", value: "business" },
      { key: "ga", text: "Гейминг", value: "gaming" }
    ];

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
        {search === "teams" ? (
          <Form>
            <Form.Field
              onChange={this.func}
              control={Select}
              options={categoryOptions}
              label={{
                htmlFor: "form-select-control-category"
              }}
              placeholder="Категории"
              search
              searchInput={{ id: "form-select-control-category" }}
            />
          </Form>
        ) : null}
        {search === "users" ? (
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
        ) : null}
      </div>
    );
  }
}
