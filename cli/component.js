const fs = require("fs");
const path = require("path");

const createComponent = function(componentName, className) {
  fs.mkdirSync(
    path.resolve(__dirname, "..", "src", "components", componentName)
  );

  const componentCode = `import "./${componentName}.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class ${componentName} extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <div className="${className}"></div>
    );
  }
}
`;

  fs.writeFileSync(
    path.resolve(
      __dirname,
      "..",
      "src",
      "components",
      componentName,
      `${componentName}.jsx`
    ),
    componentCode
  );

  fs.writeFileSync(
    path.resolve(
      __dirname,
      "..",
      "src",
      "components",
      componentName,
      "index.js"
    ),
    `import ${componentName} from "./${componentName}";

export default ${componentName};
`
  );

  fs.writeFileSync(
    path.resolve(
      __dirname,
      "..",
      "src",
      "components",
      componentName,
      `${componentName}.scss`
    ),
    `.${className} {}
      `
  );
};

module.exports = createComponent;
