import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InformationLabel from './InformationLabel';
import '../styles/result-stats-row.css';

const languageColors = {
  'JavaScript': '#f1e05a',
  'Ruby': '#701516',
  'Python': '#3572A5',
  'C': '#555555',
  'PHP': '#4F5D95',
  'Shell': '#89e051',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'Java': '#b07219',
  'C++': '#f34b7d'
};

export default class ResultStatsRow extends React.Component {

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
