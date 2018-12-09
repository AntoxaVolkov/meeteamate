import "./TeamFilter.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Form, Select } from "semantic-ui-react";

export default class TeamFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  func = (e, data) => {
    // при изменении селекта
  };

  render() {
    const {} = this.props;

    const categoryOptions = [
      { key: "p", text: "Программирование", value: "programming" },
      { key: "g", text: "Садоводство", value: "gardening" },
      { key: "c", text: "Кулинария", value: "cooking" },
      { key: "b", text: "Бизнес", value: "business" },
      { key: "ga", text: "Гейминг", value: "gaming" }
    ];

    return (
      <div className="filter">
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
      </div>
    );
  }
}
