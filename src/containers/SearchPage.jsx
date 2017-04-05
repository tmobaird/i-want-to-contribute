import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import SearchResultsBox from '../components/SearchResultsBox';
import AppInfo from '../components/AppInfo';
import { Col, Row } from 'react-bootstrap';
import * as actions from '../actions/searchActionCreators';

export class SearchPage extends React.Component {

  showAppInfo() {
    return this.props.search.submitted ? false : true;
  }

  render() {
    return (
        <div className="SearchPage">
          <Row>
            <Col xs={12} md={8} mdOffset={2}>
            <h1 className="text-center">I want to contribute to...</h1>
            <SearchBar onSubmit={this.props.actions.submitSearch} />
            <hr />
            <SearchResultsBox
              show={this.props.search.submitted}
              searchTerm={this.props.search.submittedSearchTerm}
              fetchingInProgress={this.props.results.fetching}
              results={this.props.results.data}
              getAdditionalInfo={this.props.actions.getAdditionalInfo}
            />
            </Col>
          </Row>
          { this.showAppInfo() && <AppInfo /> }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    results: state.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
