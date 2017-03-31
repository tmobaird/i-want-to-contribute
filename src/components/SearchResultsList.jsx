import React from 'react';
import SearchResult from './SearchResult';

export default class SearchResultsList extends React.Component {
  render() {
    const results = Object.keys(this.props.results).map((l,i) => {
      return <SearchResult key={i} data={this.props.results[l]} getAdditionalInfo={this.props.getAdditionalInfo} />;
    });

    return (
      <div>
        { results }
      </div>
    );
  }
}
