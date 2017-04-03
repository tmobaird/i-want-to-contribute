import React from 'react';
import OpenIssuesList from './OpenIssuesList';

const openIssuesDefaultProps = {
  data: []
}

export default class OpenIssuesRow extends React.Component {
  static defaultProps = openIssuesDefaultProps;

  render() {
    if(this.props.data.length > 0) {
      return (
        <div className="OpenIssuesRow">
          <OpenIssuesList issues={this.props.data} />
        </div>
      );
    } else {
      return (
        <div className="OpenIssuesRow">
          <h5>No Open Issues Found</h5>
        </div>
      );
    }
  }
}
