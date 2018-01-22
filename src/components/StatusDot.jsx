// @flow
import * as React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import '../styles/StatusDot.css';

const tooltip = (text: string) => (
    <Tooltip id="status-tooltip">
      {text}
    </Tooltip>
);

const StatusDot = ({status}: { status: number }) => {
  let backgroundColor = '#FF2020';
  let statusText = 'Sorry. We are currently experiencing outages. Some features may not work because of this.';
  if (status > 0) {
    backgroundColor = '#1EEE17';
    statusText = 'All systems operational';
  } else if (status === 0) {
    backgroundColor = '#FFDA20';
    statusText = 'Checking status...'
  }

  return (
      <OverlayTrigger placement="bottom" overlay={tooltip(statusText)}>
        <div className='status-dot' style={{backgroundColor}}/>
      </OverlayTrigger>
  );
};

export default StatusDot;
