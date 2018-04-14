# React: State

Component state is a plain javascript object that is used to trigger UI updates. For example. In a Navbar component that opens up we can initialize the state in the constructor as such:

```
constructor(props) {
  super(props)

  this.state = { isOpened: false }
}
```

Here the navbar is initially closed so we add a state property of isOpened with a false value. We can change state through an onClick handler on a navbar button. So when the NavbarButton component is clicked, the navbar's menu can open up.

`<NavbarButton onClick={() => { this.setState({ isOpened: !this.state.isOpened }) }} />`

Notice that I did not change state directly by doing:

`<NavbarButton onClick={() => { this.state.isOpened = !this.state.isOpened }} />`

Doing so is bad. If you mutate state directly, react will not re-render the component with the new state. Now when the NavbarButton component is clicked, the state will change to isOpened = true. Now we can use that new state to render a menu.

`{ this.state.isOpened ? <Menu /> : null }`

When we click on the Navbar button again, this.state.isOpened will equal false and thus return null, instead of the menu.

Setting state isn’t just available for event handlers, one can also use them in lifecycle methods. For example, say we have a component where we want to render the current date and time. In the component we can do the following:

```
constructor(props) {
  super(props)

  this.state = { date: new Date() }
}

componentDidMount() {
  Const timer = setInterval(() => {
     this.setState({
       date: new Date();
     })
  }, 1000)
}
```

And then we just display this.state.date, which is updated every second.

`<p>{this.state.date}</p>`

With component state the possibilities are endless, it’s a very powerful tool when it comes to updating the UI.


[&#x2190; Previous](props.md)
