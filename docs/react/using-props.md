# React: Using Props

![Contributions Welcome][contributing-badge]
![In Progress][in-progress-badge]

There are two different perspectives from which we need to learn how to use react. Those are from a **parent component** who passes props to a child, and a **react component that has props passed to it**.

### Parent Component Usage

JSX is awesome. It allows you to inline the props you pass to a component. These work very similarly to how HTML attributes work. Example:

```javascript
<MessageComponent headerText="Hello" bodyText="World" />
```

In this case, `MessageComponent` would receive props that might look something like this:

```javascript
{
  headerText: "Hello",
  bodyText: "World"
}
```

You can pass anything you want in props. Strings, Numbers, Objects, Arrays, etc. For example, if you had an array of items you wanted to display in a list component, you could pass them like this:

```javascript
const messages = ["Hello", "Hola", "Hi", "Howdy"];
<MessageList messages={messages} />
```

**Props work the exact same way passing arguments to functions work. The only difference is passing those arguments (props) through JSX syntax**.

### Using `this.props` or Accessing Props Passed to Component

![Coming Soon][coming-soon-badge]

[&#x2190; Previous](props.md) | [Next Up: **PropTypes** &#x2192;](proptypes.md)

[contributing-badge]: https://img.shields.io/badge/contributions-welcome!-4BADFF.svg
[coming-soon-badge]: https://img.shields.io/badge/coming-soon!-FF6262.svg
[in-progress-badge]: https://img.shields.io/badge/in-progress-EDE128.svg
[under-review-badge]: https://img.shields.io/badge/under-review-C486FF.svg
