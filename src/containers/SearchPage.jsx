import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/searchActionCreators';
import SearchForm from '../components/SearchForm';
import SearchResultsBox from '../components/SearchResultsBox';
import AppInfo from '../components/AppInfo';
import { Col, Row } from 'react-bootstrap';
import 'url-search-params-polyfill';

export class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);

    this.state = {
      searchTerm: params.get('q') ? params.get('q') : ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.state.searchTerm !== '') {
      this.props.actions.submitSearch(this.state.searchTerm);
    }

    if (this.props.history.action === 'PUSH') {
      this.props.actions.resetSearch();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (this.state.searchTerm !== prevState.searchTerm) &&
      (this.state.searchTerm !== '')
    ) {
      this.props.actions.submitSearch(this.state.searchTerm);
    }

    if (
      (this.state.searchTerm !== prevState.searchTerm) &&
      (this.state.searchTerm === '')
    ) {
      this.props.actions.resetSearch();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      (this.state.searchTerm !== nextProps.location.search) &&
      (nextProps.location.search !== '')
    ) {
      const params = new URLSearchParams(nextProps.location.search);
      this.setState({searchTerm: params.get('q')})
    }

    if (
      (this.state.searchTerm !== nextProps.location.search) &&
      (nextProps.location.search === '')
    ) {
      this.setState({searchTerm: ''})
    }
  }

  handleSubmit(query) {
    this.props.history.push({ search: `q=${query}` })
  }

  render() {
    const { submitted, submittedSearchTerm } = this.props.search;
    const { sortedIds, data, fetching } = this.props.results;
    const { getAdditionalInfo } = this.props.actions;

    return (
        <div className="SearchPage">
          <Row>
            <Col xs={12} md={8} mdOffset={2}>
            <h1 className="text-center">I want to contribute to...</h1>
            <SearchForm
              key={Math.random()}
              onSubmit={this.handleSubmit}
            />
            <hr />
            <SearchResultsBox
              show={submitted}
              searchTerm={submittedSearchTerm}
              fetchingInProgress={fetching}
              sortedIds={sortedIds}
              results={data}
              getAdditionalInfo={getAdditionalInfo}
            />
            </Col>
          </Row>
          { submitted ? null : <AppInfo /> }
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
