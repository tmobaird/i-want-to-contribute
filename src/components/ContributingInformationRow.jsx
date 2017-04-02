import React from 'react';
import { Col } from 'react-bootstrap';

import Remarkable from 'remarkable';

const md = new Remarkable();

export default class ContributingInformationRow extends React.Component {
  getContributingContent() {
    if(this.props.data) {
      let text = atob(this.props.data.content);
      var shortText = text.substring(0,500); // Limits the characters to display to 500
      return md.render(shortText + "\n\n**Read the full guide [here](http://github.com).**");
    } else {
      return "<strong>No Contributing Guide found</strong>";
    }
  }

  render() {
    const displayText = this.getContributingContent();
    
    return (
      <div className="ContributingInformationRow">
        <h5>CONTRIBUTING.md</h5>
        <div dangerouslySetInnerHTML={{__html: displayText}}></div>
      </div>
    );
  }
}
