// @flow
import * as React from 'react';
import '../styles/StatusDot.css';

const StatusDot = ({status}: { status: number }) => {
  let backgroundColor = '#FF2020';
  if (status > 0) {
    backgroundColor = '#1EEE17';
  } else if (status === 0) {
    backgroundColor = '#FFDA20';
  }

  return <div className='status-dot' style={{backgroundColor}}/>;
};

export default StatusDot;
