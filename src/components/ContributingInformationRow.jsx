import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Remarkable from 'remarkable';

const md = new Remarkable();

export default class ContributingInformationRow extends React.Component {
  getContributingContent() {
    if(this.props.data) {
      let text = atob(this.props.data.content);
      var shortText = text.substring(0,500); // Limits the characters to display to 500
      return md.render(shortText + `\n\n**Read the full guide [here](${this.props.data.html_url}).**`);
    } else {
      return "<strong>No Contributing Guide Found</strong>";
    }
  }

  getContent() {
    if(this.props.data.message === "Not Found") {
      return <center><h5>No Contributing Guide Found</h5></center>;
    } else {
      const displayText = this.getContributingContent();
      return (
        <Col xs={12} md={10} mdOffset={1}>
          <h5>CONTRIBUTING.md</h5>
          <div dangerouslySetInnerHTML={{__html: displayText}}></div>
        </Col>
      );
    }
  }

  render() {
    return (
      <Row className="ContributingInformationRow">
        { this.getContent() }
      </Row>
    );
  }
}
