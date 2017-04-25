# React: Props

![Contributions Welcome][contributing-badge]
![Under Review][under-review-badge]

Up to this point so far, you're probably wondering how data flow works throughout react applications. When using one large component, data flow is no problem. That is because the data exists in one space, one class, and can easily be used throughout that class. The data flow problem arises when you start decomposing your components into smaller, child components. The question then becomes...

### How Do I Pass Data to Child Components?

The simple answer: React's **Props**.

Props are essentially data that is passed to a component and can then be used by that component. This makes data flow very straightforward. You can pass props to any react component, and you can even type check the props that are passed to a given component. An easier way to think of props is that they are incredibly similar to how function arguments work. For example, when you pass an argument to a method, that method then has access to those arguments. Ex:

```JavaScript
function sum(a, b) {
  return a + b;
}
```

And simply put, that is because all react components are just functions (for the most part).


### Immutability

**Immutability** is a very popular topic when it comes to data in react and redux. This will actually be talked about in more depth later because it is very important for most react development ideologies.

So, what does **Immutability** mean? Well the dictionary definition is:

> **Immutable** _(adj)_ - unchanging over time or unable to be changed.

And in this case, immutable data, is data that cannot be changed. Pretty simple. This is related to props because react props are immutable or read-only (YOU CANNOT CHANGE THEM). This helps to keeps your components ["pure" in the sense that they NEVER modify their input](https://facebook.github.io/react/docs/components-and-props.html#props-are-read-only).

### What Are Props?

Anything and everything that is passed to a component is considered part of the **props**. A component's props is simply an **object with a set of attributes that includes all data that has been passed to the component**. This includes attributes, data, children, etc. This allows you to easily recognize what has been passed to a component and yields an easy way to use that information.

[&#x2190; Previous](components.md) | [Next Up: **Using Props** &#x2192;](using-props.md)

[contributing-badge]: https://img.shields.io/badge/contributions-welcome!-4BADFF.svg
[coming-soon-badge]: https://img.shields.io/badge/coming-soon!-FF6262.svg
[in-progress-badge]: https://img.shields.io/badge/in-progress-EDE128.svg
[under-review-badge]: https://img.shields.io/badge/under-review-C486FF.svg
