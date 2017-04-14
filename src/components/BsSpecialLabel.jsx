import React from 'react';
import { Label } from 'react-bootstrap';

const BsSpecialLabel = (props) => {
  const labelClass = props.level;
  const styles = {
    fontSize: props.fontSize,
    backgroundColor: props.color
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
