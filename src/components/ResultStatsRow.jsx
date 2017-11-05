import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import InformationLabel from './InformationLabel';
import languageColors from '../utils/languageColors';
import '../styles/result-stats-row.css';

const ResultStatsRow = (props) => {
  const { forksCount, stargazersCount, watchersCount, openIssuesCount, language } = props.data;

  return (
    <Row className='quick-info-row'>
      <Col xs={12}>
        <InformationLabel data={forksCount} level="success">{ "Forks: " }</InformationLabel>
        <InformationLabel data={stargazersCount} level="warning">{ "Stars: " }</InformationLabel>
        <InformationLabel data={watchersCount} level="info">{ "Watchers: " }</InformationLabel>
        <InformationLabel data={openIssuesCount} color="#C370E8">{ "Issues: " }</InformationLabel>
        <InformationLabel data={language} color={languageColors[language]} />
      </Col>
    </Row>
  );
}

ResultStatsRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResultStatsRow;
