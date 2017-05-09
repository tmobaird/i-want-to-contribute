import React from 'react';
import OpenIssue from './OpenIssue';
import '../styles/open-issues-list.css';

const openIssuesDefaultProps = {
  issues: []
}

export default class OpenIssuesList extends React.Component {
  static defaultProps = openIssuesDefaultProps;

  render() {
    const openIssues = this.props.issues.map((issue, index) => {
      const last = (index === (this.props.issues.length - 1));
      return <OpenIssue key={index} data={issue} last={last} />;
    });

    if(this.props.issues.length > 0) {
      return (
        <div className="OpenIssuesList">
          { this.props.children }
          { openIssues }
        </div>
      );
    } else {
      return (
        <div className="OpenIssuesList">
          { this.props.children }
          <h5 className="text-center">No Open Issues Found</h5>
        </div>
      );
    }
  }
}
