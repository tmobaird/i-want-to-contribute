import React from 'react';
import { Row, Panel, Col, Button, Well, Collapse } from 'react-bootstrap';
import Loader from 'halogen/ClipLoader';

import Remarkable from 'remarkable';

const md = new Remarkable();

//console.log(md.render('# Remarkable rulezz!'));

export default class AdditionalInformationBox extends React.Component {
  constructor(props) {
    super(props);
  }

  getContent() {
    if(this.props.fetching) {
      return (
        <Col className="text-center">
          <Loader color="#4BCEFF" size="70px" />
        </Col>
      );
    } else {
      const displayText = this.getContributingContent();

      return (
        <div>
          <h5>CONTRIBUTING.md</h5>
          <div dangerouslySetInnerHTML={{__html: displayText}}></div>
          <hr style={{ width: "90%"}} />
          <p><strong>Issues #100: [Bug] Blah doesn't working appropriately</strong>: The click on
        this button isn't working.</p>
          <p><strong>Issues #100: [Disucssion Wanted] Blah doesn't working appropriately</strong>: The click on
      this button isn't working.</p>
        </div>
      );
    }
  }

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
    const content = this.getContent();

    return (
      <div>
        { content }
      </div>
    );
  }
}
