import React from 'react';
import OpenIssuesList from './OpenIssuesList';
import { Row, Col } from 'react-bootstrap';

const openIssuesDefaultProps = {
  openIssues: [],
  suggestedIssues: []
}

export default class OpenIssuesRow extends React.Component {
  static defaultProps = openIssuesDefaultProps;

  render() {
    return (
      <Row className="OpenIssuesRow">
        <Col xs={12} md={10} mdOffset={1}>
          <h3 style={{marginTop: "0px"}}>Open Issues</h3>
          <hr />
          <OpenIssuesList issues={this.props.suggestedIssues}>
            <h4>Suggested Issues <small><i>These are open issues that are usually open for contributions or are those that are well suited for new contributors.</i></small></h4>
          </OpenIssuesList>
          <hr />
          <OpenIssuesList issues={this.props.openIssues}>
            <h4>Other Open Issues</h4>
          </OpenIssuesList>
        </Col>
      </Row>
    );
  }
}
