import "./ProfileAvaEdit.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Avatar from "components/Avatar";
import { Segment } from "semantic-ui-react";

import { confApi } from "configApp";

export default class ProfileAvaEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      previewUrl: null,
      update: false
    };
  }

  static propTypes = {
    id: PropTypes.number,
    picture: PropTypes.object,
    onSubmit: PropTypes.func,
    className: PropTypes.string
  };

  componentDidMount() {
    let { picture } = this.props;
    let previewUrl = confApi.baseUrl + picture.thumb.url;
    this.setState({ previewUrl });
  }

  static defaultProps = { className: "" };

  handleClick = e => {
    e.preventDefault();
    const { onSubmit, id } = this.props;
    const { image } = this.state;
    const formdata = new FormData();

    formdata.append("picture", image);
    formdata.append("id", id);
    onSubmit(formdata);
  };

  handleChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: file,
        previewUrl: reader.result,
        update: true
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    const { className } = this.props;
    const { previewUrl, update } = this.state;
    const wrapClass = classNames("profile-ava-edit", className);
    const saveBtnClass = classNames("ui primary button profile-ava-edit__btn", {
      "--active": update
    });

    return (
      <Segment className={wrapClass}>
        <label className="profile-ava-edit__label">
          <Avatar className="profile-ava-edit__avatar" url={previewUrl} />
          <input
            className="profile-ava-edit__input-file"
            type="file"
            onChange={this.handleChange}
          />
        </label>

        <button className={saveBtnClass} onClick={this.handleClick}>
          Сохранить
        </button>
      </Segment>
    );
  }
}
