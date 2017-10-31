import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
    document.title = "Not Found  |  IWantToContribute";
  }

  render() {
    return (
      <div>
        <h4>404 Page Not Found</h4>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
};
