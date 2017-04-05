import React from 'react';
import { Row, Panel, Collapse } from 'react-bootstrap';
import ResultStatsRow from './ResultStatsRow';
import AdditionalInformationBox from './AdditionalInformationBox';
import '../styles/search-result.css';

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
      this.props.getAdditionalInfo(this.props.data.id, this.props.data.full_name);
    }
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Row>
        <Panel>
          <a href={this.props.data.html_url}><h3>{ this.props.data.full_name }</h3></a>
          <p>{ this.props.data.description }</p>
          <ResultStatsRow data={this.props.data} />
          <Row style={{marginRight: "5px"}}>
            <a className='pull-right' onClick={this.handleExpandCollapse} style={{cursor: 'pointer'}}>Learn how you can help!</a>
          </Row>
          <Collapse in={this.state.open}>
            <div>
              <hr style={{ width: "90%"}} />
              <AdditionalInformationBox fetching={this.props.data.fetchingAdditional} data={this.props.data.additionalInformation} />
            </div>
          </Collapse>
        </Panel>
      </Row>
    );
  }
}
