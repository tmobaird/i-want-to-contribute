import React from 'react';
import TweenMax from 'gsap';
import SearchResult from './SearchResult';

export default class SearchResultsList extends React.Component {
  componentDidMount() {
    const options = {
      targets: '.animate',
      duration: 0.5,
      // eslint-disable-next-line
      vars: { scale: 0.3, opacity: 0, delay: 0.2, ease: Linear.easeOut },
      stagger: 0.1
    }
    TweenMax.staggerFrom(options.targets, options.duration, options.vars, options.stagger);
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
        {sortedResults}
      </div>
    );
  }
}
