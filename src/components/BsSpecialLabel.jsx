import React, { PropTypes } from 'react';
import { Label } from 'react-bootstrap';

const bsSpecialLabelDefaultProps = {
  level: "primary"
};

export default class BsSpecialLabel extends React.Component {
  static defaultProps = bsSpecialLabelDefaultProps;

  getLabelClass() {
    return this.props.level;
  };

  getStyles() {
    return {
      fontSize: "12px",
      backgroundColor: this.props.color
    };
  };

  render() {
    return (
      <Label bsStyle={this.getLabelClass()} style={this.getStyles()}>
        {this.props.children}
      </Label>
    );
  }
}
