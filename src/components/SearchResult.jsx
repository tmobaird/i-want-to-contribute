import React from 'react';
import { Row, Panel, Collapse } from 'react-bootstrap';
import Emojify from 'react-emojione';
import ResultStatsRow from './ResultStatsRow';
import AdditionalInformationBox from './AdditionalInformationBox';
import '../styles/search-result.css';

interface Props {
  data: Repo,
  getAdditionalInfo: (x: Repo) => void
}

export default class SearchResult extends React.Component<Props> {
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
      this.props.getAdditionalInfo(this.props.data);
    }
    this.setState({ open: !this.state.open });
  }

  render() {
    const repo = this.props.data;

    return (
      <Row>
        <Panel>
          <a href={repo.htmlUrl}><h3>{ repo.fullName }</h3></a>
          <p><Emojify style={{height: 20, width: 20}}>{ repo.description }</Emojify></p>
          <ResultStatsRow data={repo} />
          <Row style={{marginRight: "5px"}}>
            <a className='pull-right' onClick={this.handleExpandCollapse} style={{cursor: 'pointer'}}>Learn how you can help!</a>
          </Row>
          <Collapse in={this.state.open}>
            <div>
              <hr style={{ width: "90%"}} />
              <AdditionalInformationBox fetching={repo.fetchingAdditional} data={{contributing: repo.contributingInformation, additionalInformation: repo.additionalInformation}} />
            </div>
          </Collapse>
        </Panel>
      </Row>
    );
  }
}
