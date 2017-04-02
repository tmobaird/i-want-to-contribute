import React from 'react';
import ContributingInformationRow from './ContributingInformationRow';
import OpenIssuesRow from './OpenIssuesRow';
import { Col } from 'react-bootstrap';
import Loader from 'halogen/ClipLoader';

export default class AdditionalInformationBox extends React.Component {

  getContent() {
    if(this.props.fetching) {
      return (
        <Col className="text-center">
          <Loader color="#4BCEFF" size="70px" />
        </Col>
      );
    } else if(this.props.data) {
      return (
        <div>
          <ContributingInformationRow data={this.props.data} />
          <OpenIssuesRow />
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const content = this.getContent();

    return (
      <div className="AdditionalInformationBox">
        { content }
      </div>
    );
  }
}
