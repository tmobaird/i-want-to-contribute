import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import SearchResultsBox from '../components/SearchResultsBox';
import { Col } from 'react-bootstrap';
import * as actions from '../actions/searchActionCreators';

export class SearchPage extends React.Component {
  render() {
    return (
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
