import React from 'react';
import "../styles/about-page.css";
import reactImg from "../images/react.png";

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className="col-md-10 col-md-offset-1">
      <h2 className="alt-header text-center">
        <span className="text-bright-blue">{"About"}</span>
        <span className="text-black">{" - "}</span>
        <span className="text-purple">{"I Want to Contribute "}</span>
        <small>{ "v1.2.0" }</small>
      </h2>
      <div className="text-center">
        <iframe src="https://ghbtns.com/github-btn.html?user=tmobaird&repo=i-want-to-contribute&type=star&count=true" frameBorder="0" scrolling="0" width="79px" height="20px" />
        <iframe src="https://ghbtns.com/github-btn.html?user=tmobaird&repo=i-want-to-contribute&type=watch&count=true&v=2" frameBorder="0" scrolling="0" width="90px" height="20px" />
        <iframe src="https://ghbtns.com/github-btn.html?user=tmobaird&repo=i-want-to-contribute&type=fork&count=true" frameBorder="0" scrolling="0" width="85px" height="20px" />
      </div>
      <hr className="compact" />
      <p className="text-black about-text">
        { "This project originally started as a sample project that "}
        <a href="https://github.com/tmobaird" target="_blank">@tmobaird</a>
        {" used to help enhance his ReactJS skills through real life practice."}
        {" After the initial base app creation and a few brainstorming sessions, we "} 
        {"realized how much more this could be."}
      </p>
      <p className="text-black about-text">
        {"As a young developer that loves open source, I wanted nothing more than to get my name "}
        {"out there by helping out with popular open source projects. After I spent a good amount of time "}
        {"(probably too much time) poking through repositories on Github, I realized that this should be much easier. "}
        {"Don't get me wrong, Github does an absolutely amazing job of publicizing projects to the open source community. "}
        {"The continuous great work they do is astounding."}
      </p>
      <p className="text-black about-text">
        {"All that aside, I had wished there was a place that allowed developers to easily find projects and tasks within "}
        {"projects that needed help and were open to receiving that help... Well, in the tech world, what's better than wishing "}
        {"something exists?... Creating something that doesn't."}
      </p>
      <p className="text-black about-text">
        {"I am in no way shape or form claiming that this app solves every problem when it comes to developers "}
        {"finding projects to work on, or even that it does it in the best way."}
      </p>
      <blockquote className="helping-others">
        {"I'm simply saying that it helps me... and if it helps me, it might be able to help someone else out "}
        {"there. And isn't that what open source is really all about. Helping others?"}
      </blockquote>
      <p className="text-black about-text">
        {"All that being said, if we didn't openly accept contributions, what kind of open source project would we really be? "}
        <strong>
          {"If you're interested at all in helping out with this project, feel free to check out our Github repo "}
          <a href="https://github.com/tmobaird/i-want-to-contribute" target="_blank">{"here"}</a>{". "} 
          {"If you'd like to check out some quick contributing information for this project within this app, click "}
          <a href="https://i-want-to-contribute.netlify.com/?q=i-want-to-contribute">{"here"}</a>{". Or "}
          <a href="https://github.com/tmobaird/i-want-to-contribute/issues" target="_blank">{"here"}</a>
          {" for the list of currently open issues."}
        </strong>
      </p>
      <p className="text-black about-text">
        {"If you have any other questions or comments, feel free to email me at "}
        <strong>{"tmobaird@gmail.com"}</strong>
        {". Happy Contributing!"}
      </p>
      <hr />
      <h4 className="text-center">
        {"This Project was created with: "}
        <a href="https://github.com/facebookincubator/create-react-app" target="_blank">
          {"create-react-app"}<img alt="react" className="react-img" src={reactImg} />
        </a>
      </h4>
    </div>
  );
};

export default AboutPage;
