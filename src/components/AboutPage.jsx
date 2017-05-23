import React from 'react';
import {Link} from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About <small>{ "v1.1.0" }</small></h2>
      <p>
        This example app is part of the <a href="https://github.com/facebookincubator/create-react-app">create-react-app
        starter kit</a>.
      </p>
      <p>This is an example edit that Thomas made. Badaboom.</p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;
