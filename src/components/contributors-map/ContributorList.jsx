import React, { PropTypes } from 'react';
import Contributor from './Contributor';

const ContributorList = (props) => {
  const contributors = props.contributors.map((c,iter) => {
    return (
      <Contributor key={iter} {...c} />
    );
  });

  return (
    <ul className="contributor-list" style={{paddingLeft: "15px"}}>
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
