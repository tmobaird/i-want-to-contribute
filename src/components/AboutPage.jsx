import React from 'react';
import {Link} from 'react-router-dom';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About <small>{ "v1.2.0" }</small></h2>
      <p>
        This example app is part of the <a href="https://github.com/facebookincubator/create-react-app">create-react-app
        starter kit</a>.
      </p>
      <p>This is an example edit that Thomas made. Badaboom.</p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
      <p>
        <iframe src="https://ghbtns.com/github-btn.html?user=tmobaird&repo=i-want-to-contribute&type=star&count=true" frameBorder="0" scrolling="0" width="79px" height="20px" />
        <iframe src="https://ghbtns.com/github-btn.html?user=tmobaird&repo=i-want-to-contribute&type=watch&count=true&v=2" frameBorder="0" scrolling="0" width="90px" height="20px" />
        <iframe src="https://ghbtns.com/github-btn.html?user=tmobaird&repo=i-want-to-contribute&type=fork&count=true" frameBorder="0" scrolling="0" width="85px" height="20px" />
      </p>
    </div>
  );
};

export default AboutPage;
