# React: Components

![Contributions Welcome][contributing-badge]
![Under Review Badge][under-review-badge]

Components are the :heart: of React. They are also a big reason as to why React is so easy to learn and use! If you are familiar with [Object Oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming), then this will really click for you. For those who don't know, [JavaScript is an Object Oriented language](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects). React Components (which are obviously written in JavaScript) allow you to decompose your UI into `React.Component` classes (or simply JavaScript functions) that will render down to some HTML. This allows you to take advantage of a lot of the common benefits of Object Oriented programming, some of those being: **code reuse** (keeping things DRY), **maintenance ease**, **isolation**, and **encapsulation**.

### The Component Hierarchy

When creating your app, it can be very easy to simply create one component and throw everything inside it in raw form. And yeah, that would work, but that can become incredibly tedious as an app grows in size. The render content will continue to grow with all different sorts of data and presentational information mashed in. For example, say you have a page that displays a list of movies to the user. It'll display the title, year it was released, and genre. That might look something like this:

```JavaScript
const moviesList = movies.map((m,i) => {
  return <li>{ `${m.title} (${m.year}: ${m.genre})` }</li>;
});

<ul>
  { moviesList }
</ul>
```

Something like this would work for displaying our list of movies, but what if I wanted to style each item in the list? Or what if I wanted to add some styling to the list as a whole? Now we could have something like this:

```JavaScript
const moviesList = movies.map((m,i) => {
  return <li style={{padding: "5px", borderBottom: "2px solid black"}}>{ `<strong style="font-size: 16px; color: red">${m.title}</strong> (${m.year}): <p>${m.genre}</p>` }</li>;
});

<ul style={{border: "1px solid red"}}>
  { moviesList }
</ul>
```
As you can probably notice by now, that is continually getting harder to read; and this will continue the more complex your UI becomes. This is where the a **Component Hierarchy** comes in to save the day and help with code **reuse** and **isolation** of UI elements.

### Twitter example

Take this image of a sample Twitter feed for example:

![React Component Twitter Example][react-component-example-img]

As you can see, in the outermost region we have the `TweetBox`, inside that we have the `TweetList`, and inside the `TweetList` we have many `Tweet`s _(FYI: Every component that lives inside another component is considered a **child**, and the component it lives inside is considered it's **parent**)_. This an example of a component hierarchy. This structure allows the components to delegate presentational work to other components for specific UI pieces. For example, the `TweetBox` now only needs to worry about making sure it has some margins on the left and right, and that in the middle it has a `TweetList`. The `TweetList` doesn't really need to worry about anything, it just needs to make sure that it renders an array of `Tweet`s. And lastly, a `Tweet` only needs to worry about how it wants to present the actual data of an individual tweet. It doesn't need to worry about the previous tweet or the next tweet. It isolates itself worrying about it's individual data and how it wants to present it, yielding one of the many component benefits... **isolation**.

Not only is isolation shown in this example, but **reuse** is also shown. The `TweetList` includes 0 to many `Tweet`s meaning that the `Tweet` component will be used over and over passing the individual data for a single tweet to each `Tweet` component instance.

_Whoa... It's starting to all make sense :satisfied: (hopefully)_

### Knowing When to Break Up a Component

Knowing when to break up a single component into multiple smaller components can be difficult. I definitely consider it to be an art. A general rule of thumb for me is, _when writing a component, if it's starting to feel awkward or dirty, consider breaking it up into multiple components_. I've also heard an opinion that if your component's render function is more than 10 lines long, then you should decompose that component. A suggestion that Facebook makes in their docs is the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle), or the idea that:

> A component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

In reality, there's no enforced rule about when to break up your components. Just make sure you're thinking consciously about your component hierarchy, about potential areas for decomposition and reuse, and at the same time, doing what feels right :simple_smile:.

##### The Question Everyone is Thinking About

At this point, I'm sure everything sounds good in theory, but I bet there are a couple looming questions that most people have. **"How do I access data in my components? How do my child components get data from the parent components?"** These are two very VERY important questions, and are handled in React via **Props**. Continue on to the [next](props.md) section to learn about this data flow using **Props**.

[&#x2190; Previous](the-basics.md) | [Next Up: **Props** &#x2192;](props.md)

[contributing-badge]: https://img.shields.io/badge/contributions-welcome!-4BADFF.svg
[coming-soon-badge]: https://img.shields.io/badge/coming-soon!-FF6262.svg
[in-progress-badge]: https://img.shields.io/badge/in-progress-EDE128.svg
[under-review-badge]: https://img.shields.io/badge/under-review-C486FF.svg
[react-component-example-img]: ../images/react-component-example.png
