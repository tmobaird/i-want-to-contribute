# React: The Basics

![Contributing Badge][contributing-badge]

For React development there are two JavaScript libraries that are absolutely essential. Those are:

**React** - ![React][react-badge]  
**React Dom** - ![React Dom][react-dom-badge]

#### React

> Gets you immediate access to React, without also requiring the JSX transformer. This is especially useful for cases where you want to browserify your module using React.

This library is the core of all things React. This includes the library that allows your React code to be isomorphic (ie. rendering on a server and client). This library is muy importante.

#### React DOM

> This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.

This library serves as the "glue" between React and the web browser DOM. React DOM is mainly used to mount your mount your React components to the DOM so that they can actually be rendered.

### Getting Started

Before you continue reading, if you would like to locally follow along or test out any of the examples, you must install the following:

  **Yarn**:
  ```
  yarn add react
  yarn add react-dom
  ```

  **NPM**:
  ```
  npm install react
  npm install react-dom
  ```

_Note: If you'd like a much easier way to test out these examples locally, check out [this simple Codepen example](http://codepen.io/gaearon/pen/ZpvBNJ?editors=0010) that the React team at Facebook has created (It actually comes pre-built with the following example!). The workspace includes both React and React DOM by default._

To fully understand how to use React & React DOM work and how to use them, it's best to start with a basic example. This example is straight from Facebook's documentation:

```JavaScript
ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);
```

This will render `<h1>Hello World</h1>` within the DOM element with the id "root". This is the very most basic entry point for using React within your webpage/application. It can even be said that the `<h1>` that was render is our most basic React **Component**.

[&#x2190; Previous]() | [Next Up: **Components** &#x2192;](components.md)

[react-badge]: https://img.shields.io/npm/v/react.svg
[react-dom-badge]: https://img.shields.io/npm/v/react-dom.svg
[contributing-badge]: https://img.shields.io/badge/contributions-welcome!-4BADFF.svg
