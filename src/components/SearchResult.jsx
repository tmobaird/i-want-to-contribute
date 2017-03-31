import React from 'react';
import { Row, Panel, Col, Button, Well, Collapse } from 'react-bootstrap';
import ResultStatsRow from './ResultStatsRow';
//import AdditionalInformationBox from './AdditionalInformationBox';
import Loader from 'halogen/ClipLoader';
import '../styles/search-result.css';

import Remarkable from 'remarkable';

const md = new Remarkable();

console.log(md.render('# Remarkable rulezz!'));

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleExpandCollapse = this.handleExpandCollapse.bind(this);
  }

  handleExpandCollapse(e) {
    /* if data doesn't exist...
     * this.props.fetchExtendedInformation(this.props.data);
     * this should, set data["extendedInformation"].fetching = true
     * then the request will actually be made, followed by setting the redux
     * state with the results. Then setting fetching to false.
     */
    if(!this.props.data.additionalInformation) {
      //this.props.getAdditionalInfo(this.props.data.id, this.props.data.full_name);
    }
    this.setState({ open: !this.state.open });
  }

  getLoader() {
    if(this.props.data.fetchingAdditional) {
      return (
        <center>
          <Loader color="#4BCEFF" size="70px" />
        </center>
      );
    }
  }

  render() {
    /* The following is an example of the content that could be inside a
     * given contributing file that the github query will return. The content will
     * be encoded with some given encoding style. The following, and normal encoding is
     * base64, which be decoded with atob(content). The decoded content from that
     * will be in pure markdown, and should be converted into html for display.
     */
    if(this.props.data.additionalInformation) {
      let text = atob(this.props.data.additionalInformation.content);
      var shortText = text.substring(0,500); // Limits the characters to display to 500
      var displayText = md.render(shortText + "\n\n**Read the full guide [here](http://github.com).**");
    } else {
      var displayText = "<strong>No Contributing Guide found</strong>";
    }

    const loader = this.getLoader();

    return (
      <Row>
        <Panel>
          <a href={this.props.data.html_url}><h3>{ this.props.data.full_name }</h3></a>
          <p>{ this.props.data.description }</p>
          <ResultStatsRow data={this.props.data} />
          <Row style={{marginRight: "5px"}}>
            <a className='pull-right' onClick={ this.handleExpandCollapse }>Learn how you can help!</a>
          </Row>
          <Collapse in={this.state.open}>
            <div>
              <hr style={{ width: "90%"}} />
              {/* <AdditionalInformationBox fetching={this.props.data.fetchingAdditional} data={this.props.data.AdditionalInformationBox} /> */}
            </div>
          </Collapse>
        </Panel>
      </Row>
    );
  }
}
