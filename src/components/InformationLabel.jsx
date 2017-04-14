import React, { PropTypes } from 'react';
import BsSpecialLabel from './BsSpecialLabel';
import '../styles/information-label.css';

const InformationLabel = (props) => {
  if(props.data) {
    return (
      <span className='information-label'>
        <BsSpecialLabel level={props.level} color={props.color}>
          <strong>{ props.children }{ props.data }</strong>
        </BsSpecialLabel>
      </span>
    );
  } else {
    return null;
  }
}

InformationLabel.propTypes = {
  level: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.node
};

export default InformationLabel;
