import React from 'react';
import _ from 'lodash';
import SearchResultsList from './SearchResultsList';
import Loader from 'halogen/RingLoader';

export default class SearchResultsBox extends React.Component {
  render() {
    const { searchTerm, results } = this.props
    if(this.props.fetchingInProgress) {
      return (
        <center>
          <Loader color="#4BCEFF" size="140px" />
        </center>
      );
    }

    return (
      <div>
        <h4>
          Search Results for <span className="text-primary">{searchTerm}</span>
        </h4>
        { _.isEmpty(results) ? (
          <div className="alert alert-info text-center">
            <h4>{"No results were found, make sure the repo you're looking for exists and is spelled correctly."}</h4>
          </div>
        ) : (
          <SearchResultsList
            results={this.props.results}
            sortedIds={this.props.sortedIds}
            getAdditionalInfo={this.props.getAdditionalInfo}
          />
        )}
      </div>
    );
  }
}
