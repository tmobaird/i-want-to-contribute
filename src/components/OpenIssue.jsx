import React from 'react';
import Label from './BsSpecialLabel';
import '../styles/open-issue.css';

const OpenIssue = (props) => {
  // Shows bottom border if last === false
  const classes = (props.last) ? "OpenIssue" : "OpenIssue with-bottom-border";
  const labels = props.data.labels.map((label, index) => {
    return (
      // Adding this class here allows me to leverage the spacing between labels
      <span key={index} className='information-label'>
        <Label fontSize="10px" color={`#${label.color}`}>{label.name}</Label>
      </span>
    );
  });

  return (
    <div className={classes}>
      <a href={props.data.html_url}>
        <strong>{props.data.title}</strong> <small>{` #${props.data.number} `}</small>
      </a>
      { labels }
      <p className="created-at"><small>{`Opened on ${props.data.created_at}`}</small></p>
    </div>
  );
}

OpenIssue.defaultProps = {
  last: false
}

export default OpenIssue;
