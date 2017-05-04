import React from 'react';
import Label from './BsSpecialLabel';
import '../styles/open-issue.css';

const getBorder = (last=false) => {
  if(!last) { return "1px solid #EAEAEA" };
}

export default class OpenIssue extends React.Component {
  render() {
    const styles = {
      borderBottom: getBorder(this.props.last)
    };
    const labels = this.props.data.labels.map((label, index) => {
      return (
        // Adding this class here allows me to leverage the spacing between labels
        <span key={index} className='information-label'>
          <Label fontSize="10px" color={`#${label.color}`}>{label.name}</Label>
        </span>
      );
    });

    return (
      <div className="OpenIssue" style={styles}>
        <a href={this.props.data.html_url}>
          <strong>{this.props.data.title}</strong> <small>{` #${this.props.data.number} `}</small>
        </a>
        { labels }
        <p className="created-at"><small>{`Opened on ${this.props.data.created_at}`}</small></p>
      </div>
    );
  }
}
