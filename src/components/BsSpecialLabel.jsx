import React from 'react';
import { Label } from 'react-bootstrap';
import getReadableTextColor from '../utils/bsSpecialLabelHelper';

const BsSpecialLabel = (props) => {
  const labelClass = props.level;
  const styles = {
    fontSize: props.fontSize,
    backgroundColor: props.color,
    color: getReadableTextColor(props.color)
  };

  return (
    <Label bsStyle={labelClass} style={styles}>
      {props.children}
    </Label>
  );
}

BsSpecialLabel.defaultProps = {
  level: "primary",
  fontSize: "12px"
};

export default BsSpecialLabel;
