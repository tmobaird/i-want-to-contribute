import React from 'react';
import SearchResultsList from './SearchResultsList';
import Loader from 'halogen/RingLoader';

export default class SearchResultsBox extends React.Component {

  getContent() {
    if(this.props.fetchingInProgress) {
      return (
        <center>
          <Loader color="#4BCEFF" size="140px" />
        </center>
      );
    } else if(this.props.show) {
      return (
        <div>
          <h4>Search Results for <span className="text-primary">{ this.props.searchTerm }</span></h4>
          <SearchResultsList
            results={this.props.results}
            getAdditionalInfo={this.props.getAdditionalInfo}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        { this.getContent() }
      </div>
    );
  }
}
