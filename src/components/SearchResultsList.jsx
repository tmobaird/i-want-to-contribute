import React from 'react';
import SearchResult from './SearchResult';

export default class SearchResultsList extends React.Component {
  render() {
    const { results, sortedIds, getAdditionalInfo } = this.props
    console.log(results)

    const sortedResults = sortedIds.map((id) => {
      return <SearchResult key={id} data={results[id]} getAdditionalInfo={getAdditionalInfo} />
    });

    return (
      <div>
        { sortedResults }
      </div>
    );
  }
}
