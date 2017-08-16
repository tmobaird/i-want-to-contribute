import React from 'react';
import TweenMax from 'gsap';
import SearchResult from './SearchResult';

export default class SearchResultsList extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line
    TweenMax.staggerFrom('.animate', 1, { scale: 0.5, opacity: 0, delay: 0.5, ease: Linear.easeOut }, 0.2);
  }
  render() {
    const { results, sortedIds, getAdditionalInfo } = this.props

    const sortedResults = sortedIds.map((id) => {
      return (
        <div key={id} className="animate">
          <SearchResult
            data={results[id]}
            getAdditionalInfo={getAdditionalInfo}
          />
        </div>
      )
    });

    return (
      <div>
        { sortedResults }
      </div>
    );
  }
}
