import "./TeamEmblemEdit.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Emblem from "components/Emblem";

import { confApi } from "configApp";

import avatar from "images/square-image.png";

export default class TeamEmblemEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      previewUrl: null
    };
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    picture: PropTypes.object
  };

  static defaultProps = { picture: null };

  componentDidMount() {
    let previewUrl;
    if (this.props.picture) {
      previewUrl = confApi.baseUrl + this.props.picture.thumb.url;
    } else {
      previewUrl = avatar;
    }

    this.setState({ previewUrl });
  }

  handleChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: file,
        previewUrl: reader.result
      });

      this.props.onChange(file);
    };

    reader.readAsDataURL(file);
  };

  render() {
    const {} = this.props;

    return (
      <div className="team-emblem-edit">
        <label className="team-emblem-edit__label">
          <Emblem url={this.state.previewUrl} />
          <input
            className="team-emblem-edit__input-file"
            type="file"
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
