# Welcome to the Docs!

![Contributions Welcome][contributing-badge]

This doc guide includes information about an array of different topics related to React development.

This guide is completely open to contributions. If there is something you see that is wrong, could be explained better, or anything that you don't see, but you wish you did, feel free to create a pull request to add/fix/update this information. Or if there's a topic that doesn't exist, and you're not able to create it, feel free to create an issue for it and another contributor will (hopefully) be able to add it for you! Contributing to this guide is easy and any help is much appreciated!

**Icon Legend**

![Contributing Icon][contributions-icon] means **contributions are welcome** for an item.  
![In Progress Icon][in-progress-icon] means the item development is currently **in progress**.  
![Todo Icon][todo-icon] means **todo**, or that this item needs to completed.  
![Under Review Icon][under-review-icon] means the item was recently finished and its content is being **reviewed**.

### Table of Contents

- React
    - [The Basics](react/the-basics.md) ![Contributing Icon][contributions-icon]
    - [Components](react/components.md) ![Contributing Icon][contributions-icon]
    - [Props](react/props.md) ![Contributing Icon][contributions-icon] ![Under Review Icon][under-review-icon]
    - [Using Props](react/using-props.md) ![Contributing Icon][contributions-icon] ![In Progress Icon][in-progress-icon]
    - [PropTypes](react/proptypes.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - [State](react/state.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - [React.Component vs Functional Components](react/react-component-vs-functional-component.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
- Additional Reading ![Contributing Icon][contributions-icon]
    - [Redux](additional-reading/redux.md) ![Contributing Icon][contributions-icon] ![In Progress Icon][in-progress-icon]
    - React Router ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - Webpack ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - Yarn ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
- [Developer Guide](developer-guide/README.md)
    - [Setting Up Your Environment](developer-guide/setting-up-your-environment.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - [What Does `yarn start` Really Do?](developer-guide/yarn-start.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - [Why Are We Using Express?](developer-guide/express-usage.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - [Foreman and Procfiles](developer-guide/foreman-and-procfiles.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - [Running Only The UI Server](developer-guide/running-the-ui-server.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - [Running Only The Express Server](developer-guide/running-the-express-server.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - [Bundled into Single Deploy (the easy way)](developer-guide/bundled-deployment.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
    - [The Semi-Microservice Approach (a bit harder, but still easy)](developer-guide/semi-microservice-deployment.md) ![Contributing Icon][contributions-icon] ![Todo Icon][todo-icon]
- [Common Problems](common-problems.md) ![Contributing Icon][contributions-icon]
- [Additional Resources](additional-resources.md) ![Contributing Icon][contributions-icon] ![In Progress Icon][in-progress-icon]
- [Create React App Guide](create-react-app-readme.md)

### Contributing

The docs part of this project is completely open for contributions! Feel free to add new docs about topics that are currently not on the list, or update any existing docs to help make them better. Any help with this would be awesome! When contributing to the docs there are a few basic rules that should be followed:

- Keep each docs page brief. Long doc pages tend to make readers lose focus and skim over a topic. We don't want that, we want the readers of our docs to engage with what they are reading. To follow this, there are a couple things you can do:
  - Cut the fluff. There's no need to add fancy wording. Get straight to the point!
  - Break up larger docs into multiple smaller docs (similar to how react component decomposition works :wink:)
- Make sure to add the doc page in proper order. The docs should flow together. Find a place you feel the doc fits in the table of contents and add it there. Then add a footer to your doc page that includes the proper previous topic as well as next topic. Check out the footer of the _[The Basics](react/the-basics.md)_ doc for reference.
- Add code examples if you can by either embedding code in the doc or inserting links to code examples in our codebase.
- Add any other references you think are useful. This can be other docs sources or really anything that is helpful (My favorites are videos and diagrams!).
- Upload any custom images to the [images/](images/) directory.
- Use badges in your docs to indicate the status of a given doc or section of a doc. Some ideas for these are:
  - ![Contributing Badge][contributing-badge]
  - ![In Progress Badge][in-progress-badge]
  - ![Coming Soon Badge][coming-soon-badge]
  - ![Under Review Badge][under-review-badge]
- **Make your doc fun! The last thing we want is for readers to get bored. Feel free to add emojis, images, videos, or whatever you want to spice up your doc. As long as the content is solid and is enticing to read, it has a home here! :+1:**

For an official guide about how to contribute to this project, check out this project's [Contributing Guide](https://github.com/tmobaird/i-want-to-contribute/blob/master/CONTRIBUTING.md).

A big kudos to all the contributors. You all are awesome!

[contributing-badge]: https://img.shields.io/badge/contributions-welcome!-4BADFF.svg
[coming-soon-badge]: https://img.shields.io/badge/coming-soon!-FF6262.svg
[in-progress-badge]: https://img.shields.io/badge/in-progress-EDE128.svg
[under-review-badge]: https://img.shields.io/badge/under-review-C486FF.svg
[contributions-icon]: images/contributions-icon.png
[in-progress-icon]: images/in-progress-icon.png
[todo-icon]: images/todo-icon.png
[under-review-icon]: images/under-review-icon.png
