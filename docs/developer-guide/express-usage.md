# Why Are We Using Express?

![Contributions Welcome][contributing-badge] ![In Progress][in-progress-badge]


Shortly after the initial release of this application a big time security vulnerability was found within the app.

For those of you who don't know, this app uses [create-react-app]() as a react framework/boilerplate to help abstract away some of the more complex, repetitive configurations commonly used for react applications (ie. Webpack). Create-react-app is an awesome project, they have a ton of neat utilities baked in that dramatically help enhance the developer experience as well as your project's configuration.

Create-react-app has a very neat strategy for handling environment variables. In short, any environment variable defined with the prefix `REACT_APP` can be used in your app using the normal `process.env.REACT_APP_ENV_VAR_NAME` style.

The **problem** with this is that when an environment variable is loaded and used in the source, it will get outputted verbatim in the Webpack bundle output.

_**This really isn't a problem at all with create-react-app, but more so with Webpack.**_

### Why This Is A Problem?

This _feature_ is a problem because it means any secret data stored as an environment variable and used in the source can eventually be fished out in the Webpack output bundle. This is as easy as viewing the app in a browser like Chrome, opening the browser dev tools, clicking `Sources`, selecting `Webpack`, and viewing the `main.js` file in that folder. If you do a `cmd + f` on this file and search for `REACT_APP` you can find all the used environment variables and their values. :scream:.

This is a huge problem for this app due to the use of a Github access token. If we were to put all of our Github queries on the client side we would need to access our Github tokens on the client side as well. This would result in our private Github tokens being outputted to the webpack bundle, available for viewing via browser dev tools... for the whole world to see :eyes: :earth_americas: :scream:.

### Express To The Rescue

This is the exact point where [Express]() came in to save the day. For those of you who don't know, ExpressJS is a framework that allows you to easily create web servers with RESTful endpoints.

Express was the exact solution we needed because we could take our Github token environment out of the client side entirely and move it to the express server. Much safer! At the same time we could create a web server with a given set of endpoints required for all the queries we make to Github. This really allows to isolate the logic that is required when handling data fetching from the Github API.

In short, the client side code makes requests to our created endpoints on our express server. The express server then uses the Github token and fetches some requested data from the Github API, and returns it to the client!

### Examples

TODO...

[&#x2190; Previous](yarn-start.md) | [Next Up: **Foreman and Procfiles** &#x2192;](foreman-and-procfiles.md)

[contributing-badge]: https://img.shields.io/badge/contributions-welcome!-4BADFF.svg
[coming-soon-badge]: https://img.shields.io/badge/coming-soon!-FF6262.svg
[in-progress-badge]: https://img.shields.io/badge/in-progress-EDE128.svg
[under-review-badge]: https://img.shields.io/badge/under-review-C486FF.svg
