import React from 'react';
import OpenIssue from './OpenIssue';
import { Col } from 'react-bootstrap';

const openIssuesDefaultProps = {
  data: []
}

export default class OpenIssuesList extends React.Component {
  static defaultProps = openIssuesDefaultProps;

  render() {
    const openIssues = this.props.issues.map((issue, index) => {
      return <OpenIssue key={index} data={issue} />;
    });
    return (
      <div className="OpenIssuesList">
        <Col xs={12} md={10} mdOffset={1}>
          <h4>Open Issues</h4>
          { openIssues }
        </Col>
      </div>
    );
  }
}
