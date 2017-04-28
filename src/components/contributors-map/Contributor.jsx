import React, { PropTypes } from 'react';

const Contributor = (props) => {
  return (
    <li className="contributor">
      <span>{props.name}</span> (<a href={`http://github.com/${props.username}`} target="_blank">{`@${props.username}`}</a>)
    </li>
  );
}

Contributor.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string
}

Contributor.defaultProps = {
  username: "",
  name: ""
}

export default Contributor;
