import React, { PropTypes } from 'react';
import Contributor from './Contributor';
import './styles/contributor-list.css';

const ContributorList = (props) => {
  const contributors = props.contributors.map((c,iter) => {
    return <Contributor key={iter} {...c} />;
  });

  return (
    <ul className="contributor-list">
      { contributors }
    </ul>
  );
}

ContributorList.propTypes = {
  contributors: PropTypes.array
}

ContributorList.defaultProps = {
  contributors: []
}

export default ContributorList;
