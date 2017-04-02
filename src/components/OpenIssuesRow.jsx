import React from 'react';
import { Col } from 'react-bootstrap';

export default class OpenIssuesRow extends React.Component {
  render() {
    return (
      <div className="OpenIssuesRow">
        <hr style={{ width: "90%"}} />
        <p><strong>Issues #100: [Bug] Blah doesn't working appropriately</strong>: The click on
      this button isn't working.</p>
        <p><strong>Issues #100: [Disucssion Wanted] Blah doesn't working appropriately</strong>: The click on
    this button isn't working.</p>
      </div>
    );
  }
}
