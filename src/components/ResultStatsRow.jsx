import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import InformationLabel from './InformationLabel';
import languageColors from '../utils/languageColors';
import '../styles/result-stats-row.css';

export default class ResultStatsRow extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const data = this.props.data;

    return (
      <Row className='quick-info-row'>
        <Col xs={12}>
          <InformationLabel data={data.forks_count} level="success">{ "Forks: " }</InformationLabel>
          <InformationLabel data={data.stargazers_count} level="warning">{ "Stars: " }</InformationLabel>
          <InformationLabel data={data.watchers_count} level="info">{ "Watchers: " }</InformationLabel>
          <InformationLabel data={data.open_issues_count} color="#C370E8">{ "Issues: " }</InformationLabel>
          <InformationLabel data={data.language} color={languageColors[this.props.data.language]} />
        </Col>
      </Row>
    );
  }
}
