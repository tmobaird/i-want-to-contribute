# Common Problems

Development headaches are no bueno :x:. This doc includes a list of commonly encountered problems during react development. If there's an issue you've encountered during your personal react development that you do not see on this, feel free to create a PR and add it. The more the merrier! :white_check_mark:

##### _Uncaught TypeError: Cannot read property 'setState' of undefined_

This can occur for an array of reasons, but most straight forward it means:

> Whatever you are attempting to call `setState` on does not exist (is undefined)

**TL;DR Answer**: The function you're calling `setState` in probably isn't bound to `this`. Add a statement like the following to your component's constructor: `this.yourFunctionName() = this.yourFunctionName.bind(this);`

<details>
<summary>**Long Answer**: (click to show)</summary>
This most commonly occurs when you are attempting to use `this.setState(someData)`, and the scope that you are in is not bound to `this`. A very common example of this is in event handler functions. For example, say you have an input field that `onChange` (when the input value changes), calls the function `handleInputChange()` and attempts to update the state attribute `input` with the new input value. Like this:

```javascript
class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.input}
        onChange={this.handleInputChange}
      />
    );
  }
}
```

This would throw _Uncaught TypeError: Cannot read property 'setState' of undefined_ when someone edits what is inside the input field, and that is because the `handleInputChange` function does not know what this is, because it is not bound to the component. To bind this function, add the following to the component's constructor:

```javascript
constructor(props) {
  super(props);
  this.handleInputChange() = this.handleInputChange.bind(this);
}
```

Your function is now bound and should work properly :+1:.
</details>
